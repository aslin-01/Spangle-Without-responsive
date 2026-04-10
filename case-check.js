const fs = require('fs');
const path = require('path');
const srcDir = './src';

function walk(dir, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) walk(fullPath, files);
    else if (/\.(js|jsx|ts|tsx)$/.test(file)) files.push(fullPath);
  });
  return files;
}

function checkFiles() {
  const files = walk(srcDir);
  let hasError = false;
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const regex = /import\s+.*?\s+from\s+['"](.*?)['"]|import\s*['"](.*?)['"]/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      const imp = match[1] || match[2];
      if (imp && imp.startsWith('.')) {
        const ext = path.extname(imp);
        const targetPath = path.resolve(path.dirname(file), imp);
        
        let found = false;
        const attempt = (testPath) => {
          if (found) return;
          try {
            const dir = path.dirname(testPath);
            const base = path.basename(testPath);
            if (!fs.existsSync(dir)) return;
            const actualFiles = fs.readdirSync(dir);
            if (!actualFiles.includes(base)) {
              const lowerFiles = actualFiles.map(f => f.toLowerCase());
              const idx = lowerFiles.indexOf(base.toLowerCase());
              if (idx !== -1) {
                console.log('CASE MISMATCH in ' + file + ':\n  import expects: ' + base + '\n  actual file: ' + actualFiles[idx]);
                hasError = true;
                found = true;
              }
            } else { found = true; }
          } catch(e) {}
        };
        
        attempt(targetPath);
        if (!found && !ext) {
          attempt(targetPath + '.js');
          attempt(targetPath + '.jsx');
          attempt(targetPath + '.ts');
          attempt(targetPath + '.tsx');
          attempt(path.join(targetPath, 'index.js'));
          attempt(path.join(targetPath, 'index.jsx'));
        }
      }
    }
  });
  if (!hasError) console.log('No case mismatches found.');
}
checkFiles();
