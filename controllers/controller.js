/* Copyright © 2017 Oracle and/or its affiliates. All rights reserved. */
//var commons = require('../data/commons.js');

module.exports = function (/*data*/) {
    var controller = {};

    controller.getResponse = function (request, response) {
        sendResponse(response, 'Dit is een response');
    };

    /*controller.getMovie = function (request, response) {
        var movieId = parseInt(request.params.movieId);
        data.getMovie(movieId)
            .then(sendResponse.bind(this, response))
            .catch(sendError.bind(this, response));
    };*/


    return controller;
};

function sendResponse(response, obj) {
    response.send(JSON.stringify(obj, null, 2));
}