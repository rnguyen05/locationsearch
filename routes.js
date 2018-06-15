

module.exports = function(app){
            var application = require('./routes/application');
            var users = require('./routes/users');
            var properties = require('./routes/properties');
            
            app.use('/', application);
            app.use('/properties', properties);
            app.use('/users', users);
            //app.use('/searchproperties', searchproperties);
}