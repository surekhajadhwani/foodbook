module.exports = function () {

    var models = {};
    var mongoose = require("mongoose");
    var ReviewSchema = require("./review.schema.server")();
    var ReviewModel = mongoose.model("ReviewModel", ReviewSchema);

    var api = {
        setModels: setModels,
        createReview: createReview,
        findAllReviewsForUser: findAllReviewsForUser,
        findAllReviewsForRestaurant: findAllReviewsForRestaurant,
        findReviewById: findReviewById,
        updateReview: updateReview,
        deleteReview: deleteReview
    };
    return api;

    function setModels(_models) {
        models = _models;
    }

    function createReview(review) {
        return ReviewModel.create(review);
    }

    function findAllReviewsForUser(userId) {
        return models.userModel.findAllReviewsForUser(userId);
    }

    function findAllReviewsForRestaurant(restaurantId) {
        return models.restaurantModel.findAllReviewsForRestaurant(restaurantId);
    }

    function findReviewById(reviewId) {
        return ReviewModel.findById(reviewId);
    }

    function updateReview(reviewId, review) {
        return ReviewModel.update(
            {
                _id: reviewId
            },
            {
                $set: review
            }
        );
    }

    function deleteReview(reviewId) {
        return ReviewModel.remove({_id: reviewId});
    }
};