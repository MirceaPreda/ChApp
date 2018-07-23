
module.exports = function(async, subiect, _){
    return {
        SetRouting: function(router){
            router.get('/home', this.homePage);
        },
        homePage: function(req, res){
            async.parallel([
                function(callback){
                    subiect.find({}, (err, result) => {
                        callback(err, result);
                    })
                }
            ], (err, result) => {
                const res1 = result[0];

                res.render('home', {title: 'ChApp - Home', data: res1});
            })
            
        }
    }
    
}