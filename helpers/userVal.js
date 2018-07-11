'use strict';

module.exports = function() {
    return {
        SignUpValidation: (req, res, next) => {
            req.checkBody('username', 'Username is required').notEmpty();
            req.checkBody('username', 'Username is less than 5 letters').isLength({min: 5});
            req.checkBody('email', 'Email is required').notEmpty();
            req.checkBody('email', 'email is invalid').isEmail();
            req.checkBody('password', 'password is required').notEmpty();
            req.checkBody('password', 'password is less than 5 letters').isLength({min: 5});

            req.getValidationResult()
                .then((result) => {
                    const errors = result.array();
                    const messages = [];
                    errors.forEach((error) => {
                        messages.push(error.msg);
                    });
                    req.flash('error', messages);
                    res.redirect('/signup');
                })
                .catch((err) => {
                    return next();
                })
        },


        LoginValidation: (req, res, next) => {
            req.checkBody('email', 'Email is required').notEmpty();
            req.checkBody('email', 'email is invalid').isEmail();
            req.checkBody('password', 'password is required').notEmpty();
            req.checkBody('password', 'password is less than 5 letters').isLength({min: 5});

            req.getValidationResult()
                .then((result) => {
                    const errors = result.array();
                    const messages = [];
                    errors.forEach((error) => {
                        messages.push(error.msg);
                    });
                    req.flash('error', messages);
                    res.redirect('/');
                })
                .catch((err) => {
                    return next();
                })
        }
    }
}


