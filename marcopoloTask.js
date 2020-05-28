const url = require('url');
var querystring = require('querystring');

var actions = {
    'GET': (request, response) => {
        let parsedUrl = url.parse(request.url);
        let lastIndex = querystring.parse(parsedUrl.query).number;
        
        let valueContainer = [];
        for (let start = 1; start <= lastIndex; start++) {
            console.log(start, start % 7 === 0, start % 4 === 0);

            if (start % 7 === 0 && start % 4 === 0) valueContainer.push('marcopolo');
            else if (start % 4 === 0) valueContainer.push('marco');
            else if (start % 7 === 0) valueContainer.push('polo');
            else valueContainer.push(start);
            if ((valueContainer.length % 1000) == 0) valueContainer.push('\n');
        }
        let finalString = valueContainer.join(' ');
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end(finalString);
    }
};

module.exports = (request, response) => {
    var action = actions[request.method];
    if (action) {
        action(request, response);
    } else {
        response.writeHead(404);
        response.end('Not Found');
    }
};