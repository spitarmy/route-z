const fs = require('fs');
const path = require('path');

function findDuplicateKeys(jsonString) {
  const duplicates = [];
  
  // Custom parser to detect duplicate keys
  let pos = 0;
  function parseObject() {
    const keys = new Set();
    while (pos < jsonString.length) {
      // Find next string or end of object
      const char = jsonString[pos];
      if (char === '}') {
        pos++;
        return;
      }
      if (char === '"') {
        // Parse key
        let key = '';
        pos++; // skip opening quote
        while (pos < jsonString.length) {
          if (jsonString[pos] === '\\') {
            key += jsonString[pos + 1];
            pos += 2;
          } else if (jsonString[pos] === '"') {
            pos++; // skip closing quote
            break;
          } else {
            key += jsonString[pos];
            pos++;
          }
        }
        
        // Find colon
        while (pos < jsonString.length && jsonString[pos] !== ':') pos++;
        pos++; // skip colon
        
        // Check if key is duplicate at this level
        if (keys.has(key)) {
          duplicates.push(key);
        } else {
          keys.add(key);
        }
        
        // Skip value
        skipValue();
      } else {
        pos++;
      }
    }
  }

  function skipValue() {
    while (pos < jsonString.length) {
      const char = jsonString[pos];
      if (char === '{') {
        pos++;
        parseObject();
        return;
      } else if (char === '[') {
        pos++;
        skipArray();
        return;
      } else if (char === '"') {
        pos++;
        while (pos < jsonString.length) {
          if (jsonString[pos] === '\\') pos += 2;
          else if (jsonString[pos] === '"') { pos++; break; }
          else pos++;
        }
        return;
      } else if (char === ',' || char === '}' || char === ']') {
        return;
      } else {
        pos++;
      }
    }
  }

  function skipArray() {
    while (pos < jsonString.length) {
      const char = jsonString[pos];
      if (char === ']') {
        pos++;
        return;
      }
      skipValue();
      if (jsonString[pos] === ',') pos++;
    }
  }

  while (pos < jsonString.length) {
    if (jsonString[pos] === '{') {
      pos++;
      parseObject();
    } else {
      pos++;
    }
  }
  
  return duplicates;
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const scripts = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
  if (!scripts) return;

  scripts.forEach((s, idx) => {
    const raw = s.replace(/<script type="application\/ld\+json">/, '').replace(/<\/script>/, '');
    const dups = findDuplicateKeys(raw);
    if (dups.length > 0) {
      console.log(`❌ ${filePath} [script ${idx}] DUPLICATE KEYS:`, dups);
    } else {
      console.log(`✅ ${filePath} [script ${idx}] OK`);
    }
  });
}

function scan(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    if (f.isDirectory() && !f.name.startsWith('.')) {
      scan(path.join(dir, f.name));
    } else if (f.isFile() && f.name.endsWith('.html')) {
      checkFile(path.join(dir, f.name));
    }
  }
}

scan(__dirname);
