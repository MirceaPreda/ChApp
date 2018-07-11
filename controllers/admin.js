
const path = require('path');
const fs = require('fs');

module.exports = function(formidable) {
    return {
        SetRouting: function(router){
            router.get('/dashboard', this.dashbPage);

            router.post('/uploadFile', this.uploadFile);
        },

        dashbPage: function(req, res){
            res.render('admin/dash');
        },

        uploadFile: function(req, res) {
            const form = new formidable.IncomingForm();
            form.uploadDir = path.join(__dirname, '../public/uploads');

            form.on('file', (field, file) => {
                fs.rename(file.path, path.join(form.uploadDir, file.name), (err) =>{
                    if(err) throw err;
                    console.log("File renamed with success");
                })
            });
            form.on('error', (err) => {
                console.log(err)
            });

            form.on('end', () => {
                console.log('Upload successful');
            });

            form.parse(req);
        }
    }
} 