const path = require('path');
const fs = require('fs/promises');

async function copyFolder() {
  const srcFolder = path.join(__dirname, 'files');
  const destFolder = path.join(__dirname, 'copy-files');
    
  try {
    await fs.mkdir(destFolder, { recursive: true });
    console.log('"copy-files" folder was created');
    const files = await fs.readdir(srcFolder);
    for (const file of files) {
      const origFile = path.join(srcFolder, file);
      const copyFile = path.join(destFolder, file);
      await fs.copyFile(origFile, copyFile);
    }
    console.log('original files were copied to "copy-files" folder');

  } catch (err) {
    console.error(err);
  }
}
copyFolder();
