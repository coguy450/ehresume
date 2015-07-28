var models = require('../models/models.js');
var mongoose = require('mongoose');
var swig = require('swig');

var Surveys = mongoose.model('Surveys')
var User = mongoose.model('User')

exports.index = function(req,res){
    res.render('index');



    };


   exports.addquestion =  function(req,res){
       //console.log(req.body, 'req.body'); //same w/ user obj as survey id
       //console.log(req.body.id, 'req.body.id'); //survey id = whole user
       var question = new Surveys({
           question: req.body.question,
           opt_1: req.body.opt_1,
           opt_2: req.body.opt_2,
           opt_3: req.body.opt_3,
           opt_4: req.body.opt_4,
           _user: req.body.id._id
       });
       //console.log(question, 'question'); //correct survey
       //console.log(req.body.id.questions, 'req.body.id.questions'); //empty array - correct inside survey
       var newQuestions = [question]; //obj in array
       //console.log(newQuestions, 'newQuestions'); //survey in array in user
      var  user = req.body.id; //right! user obj
       //console.log(user, 'user');
       var newUser = newQuestions.push(question);
       console.log(newUser, 'newUser'); //not right
       User.findOne().update({_id: user._id}, newUser)
       question.save(function(err){
           if(err)
           {
               console.log("error");
           }
           else
           {
               res.send({status: "success"});
           }
       })
   }




