/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: function(req, res) {
    var user = req.allParams();
    UserService.save(user, (err, record) => {
      if(err) {
        return res.json({status: 400 ,error: 'Unable to create user'});
      } else {
        return res.json({status: 201, data: record});
      }
    });
  },

  findAll: function(req, res) {
    UserService.findAll((err, records) => {
      if(err) {
        return res.json({status: 404 ,error: 'Unable to find users'});
      } else {
        return res.json({status: 200, data: records});
      }  
    });
  },

  delete: function(req, res) {
    var userId = req.params.id;
    UserService.delete(userId, (err, user) => {
      if (err) {
        return res.json({ status:404, error: err });
      } else {
        return res.json({ status:200 });
      }      
    });
    
  },

  fillData: function(req, res) {
    UserService.fillData((err, records) => {
      if(err) {
        return res.json({status: 400 ,error: 'Unable to find users'});
      } else {
        return res.json({status: 200, data: records});
      }
    })
  },


};

