module.exports = {

  save: function(user, cb) {
    User.create(user).exec((err, record) => {
      if(err) {
        cb(err, null);
      } else {
        cb(null, record);
      }
    });
  },

  findAll: function(cb) {
    User.find({sort: 'createdAt DESC'}).exec((err, records) => {
      if(err) {
        cb(err, null);
      } else {
        cb(null, records);
      }  
    });
  },

  delete: function(userId, cb) {
    if (!userId)
      cb('Missing user id field', null); 

    User.destroy({ id: userId }).exec((err, user) => {
      if(err) {
        cb(err, null);
      } else {
        cb(null, user);
      }
    });
  },

  fillData: function(cb) {
    User.find({sort: 'createdAt DESC'}).exec((err, records) => {
      if(err) {
        cb(err, null);
      } else {
        if(records.length == 0) {
          var data = [
            {
              'full_name': 'James Isac Neutron',
              'email': 'neutron@example.com',
              'city': 'City',
              'ride_in_group': 'Always',
              'days': ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
            },
            {
              'full_name': 'Carl Wheezer',
              'email': 'carl@example.com',
              'city': 'City',
              'ride_in_group': 'Sometimes',
              'days': ['Mon','Tue','Wed','Thu','Fri']
            },
            {
              'full_name': 'Cindy Vortex',
              'email': 'cindyvortex@example.com',
              'city': 'City',
              'ride_in_group': 'Never',
              'days': ['Sun','Sat']
            },
            {
              'full_name': 'Sheen Estevez',
              'email': 'sheen@example.com',
              'city': 'City',
              'ride_in_group': 'Sometimes',
              'days': ['Mon','Wed','Fri']
            },
          ];
          var result = [];
          async.forEach(data, (obj, callback) => {
            User.create(obj).exec((err, record) => {
              if(err) {
                callback(err);
              } else {
                result.push(record);
                callback();
              }
            });            
          }, function(err) {
            if(err) {
              cb(err, null);
            } else {
              cb(null, result);
            }
          });
        } else {
          cb(null, records);
        }
      }  
    });
  }
}