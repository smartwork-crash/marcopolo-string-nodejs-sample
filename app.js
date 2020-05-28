const marcopoloTask = require('./marcopoloTask');
var url = require('url');

module.exports = (request, response) => {
    var parts = url.parse(request.url);
    if (parts.pathname === '/marcopoloTask') {
        marcopoloTask(request, response);
    } else {
        // error handle unknown path
    }
};