//formidable module --> working with files upload
import http from 'http';
import formidable from 'formidable';

//Step 1 - Create an upload form
http
  .createServer((req, res) => {
    if (req.url == '/fileupload') {
      const form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.filepath;
        var newpath =
          'C:/Users/Shubham Jaiswal/' + files.filetoupload.originalFilename;
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write('File uploaded and moved!');
          res.end();
        });
      });
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
  })
  .listen(8080);

//step 2 - parse the uploaded file
