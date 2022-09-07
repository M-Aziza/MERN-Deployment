const Controller = require('../controllers/controller');

module.exports = function(app){
    app.get ('/api/pets', Controller.all);
    app.get ('/api/:id', Controller.getOne);
    app.post ('/api/pet/new', Controller.createNew);
    app.put ('/api/pet/:id', Controller.update);
    app.delete ('/api/delete/:id', Controller.delete);
}