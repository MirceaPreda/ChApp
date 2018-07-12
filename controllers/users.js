'use strict';

module.exports = function(_, passport, userVal){
    
    return {
        SetRouting: function(router){
            router.get('/', this.indexPage);
            router.get('/signup', this.getSignUp);


            router.post('/', userVal.LoginValidation, this.postLogin);
            router.post('/signup', userVal.SignUpValidation, this.postSignUp);
        },

        indexPage: function(req, res){
            const errors = req.flash('error');
            return res.render('index', {title: 'MidWork | Login', messages: errors, hasErrors: errors.length > 0});
        },

        postLogin: passport.authenticate('local.login', {
            successRedirect: 'home',
            failureRedirect: '/',
            failureFlash: true
        }),


        getSignUp: function(req, res){
            const errors = req.flash('error');
            return res.render('signup', {title: 'MidWork | SignUp', messages: errors, hasErrors: errors.length > 0});
        },

        postSignUp: passport.authenticate('local.signup', {
            successRedirect: 'home',
            failureRedirect: '/signup',
            failureFlash: true
        })

    }

}