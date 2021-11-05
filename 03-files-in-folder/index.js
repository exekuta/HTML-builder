const path = require('path');
const fs = require('fs/promises');
// const { stdin, stdout } = process;

const secretFolder = path.join(__dirname, 'secret-folder');

async function folder() {
  try {
    const files = await fs.readdir(secretFolder, { withFileTypes: true });
    for (const file of files) 
      if (file.isFile()) {
        const filePath = path.join(secretFolder, file.name);
        const fileExtension = path.extname(filePath).slice(1);
        const fileName = path.parse(filePath).name;
        const fileSize = await fs.stat(filePath);
        console.log(`${fileName} - ${fileExtension} - ${fileSize.size} b`);
      }
        
  } catch (err) {
    console.error(err);
  }
}
folder();

  