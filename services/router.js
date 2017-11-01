/* Copyright © 2017 Oracle and/or its affiliates. All rights reserved. */
const express = require('express');

module.exports = function (controller) {
    var router = express.Router();

    router.route('/')
        .get(controller.getResponse);
        //.post(movieController.postMovie);

    /*router.route('/:movieId')
        .get(movieController.getMovie)
        .post(movieController.postReview)
        .put(movieController.putMovie)
        .delete(movieController.deleteMovie);

    router.route('/:movieId/:reviewId')
        .get(movieController.getReview)
        .put(movieController.putReview)
        .delete(movieController.deleteReview);*/

    return router;
};
