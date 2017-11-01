var server = require('./services/rest-server.js');
var config = require('./config/config.js');


var router = require('./services/router.js');
var controller = require('./controllers/controller.js');


var mController = controller(/*dataSource*/);
var mRouter = router(mController);

server.start(config, mRouter);
console.log('server is listening on port:', config.server.port);