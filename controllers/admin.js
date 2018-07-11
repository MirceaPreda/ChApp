
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
        }
    }
} 