const fs = require('fs');
// fs.appendFile() --> create/append the content in a file and if file is not exist, it will create it.

//Exapmple-1
fs.appendFile(
  'newfile1.txt',
  'This is the content of the file 1',
  function (err) {
    if (err) {
      throw err;
    } else {
      console.log('File-1 saved successfully!');
    }
  }
);

//fs.open() --> opens a file for reading/writing

//Example-2
fs.open('newFile2.txt', 'w', (err, file) => {
  if (err) {
    throw err;
  } else {
    console.log('File-2 saved successfully.');
  }
});

//fs.writeFile() method replaces the specified file and content if it exists.

// Example-3
fs.writeFile(
  'newfile1.txt',
  'This is  the content of file-3 -> Shubham Jaiswal',
  (err) => {
    if (err) {
      throw err;
    } else {
      console.log('File-1 updated successfully!');
    }
  }
);

//Update files methods
// 1.) fs.appendFile()
// 2.) fs.writeFile()

//Delete Files methods
// 1.) fs.unlink()

//Example-3

fs.unlink('newfile2.txt', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('File-2 Deleted successfully.');
  }
});
