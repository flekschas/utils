const fs = require('fs');
const pkg = require('../package.json');

const copyFileSync = (source, dest) => {
  const content = fs.readFileSync(source, 'utf-8');
  fs.writeFileSync(dest, content);
};

delete pkg.private;
delete pkg.scripts;
delete pkg.devDependencies;
delete pkg.files;
pkg.main = 'utils.js';
pkg.module = 'utils.esm.js';
pkg.unpkg = 'utils.min.js';
fs.writeFileSync('dist/package.json', JSON.stringify(pkg, null, 2));

copyFileSync('CHANGELOG.md', 'dist/CHANGELOG.md');
copyFileSync('README.md', 'dist/README.md');
copyFileSync('LICENSE', 'dist/LICENSE');

fs.readdirSync('src')
  .filter(file => !file.includes('common') && !file.includes('index'))
  .forEach(file => {
    const name = file.endsWith('.js') ? file.slice(0, -3) : file;
    const filePkg = {
      name: `@flekschas/utils/${name}`,
      main: `../umd/${file}`,
      module: `../esm/${file}`
    };
    if (!fs.existsSync(`dist/${name}`)) {
      fs.mkdirSync(`dist/${name}`);
    }
    fs.writeFileSync(
      `dist/${name}/package.json`,
      JSON.stringify(filePkg, null, 2)
    );
  });
