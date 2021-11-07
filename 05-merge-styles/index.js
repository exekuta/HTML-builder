const path = require('path');
const fs = require('fs/promises');

async function mergeCss() {
  const srcFolder = path.join(__dirname, 'styles');
  const arr = [];
      
  try {
    const files = await fs.readdir(srcFolder, { withFileTypes: true });
    
    for (const file of files) {
      const stylePath = path.join(srcFolder, file.name);
      const fileExtension = path.extname(stylePath).slice(1);

      if (file.isFile() && fileExtension == 'css') {
        const styles = await fs.readFile(stylePath, 'utf-8');
        arr.push(styles);
      }
    }
    
    const destFolderBundle = path.join(__dirname, 'project-dist', 'bundle.css');
    await fs.writeFile(destFolderBundle, arr.join('\n'));
    console.log('CSS files were merged to "bundle.css" file');
  
  } catch (err) {
    console.error(err);
  }
}
mergeCss();