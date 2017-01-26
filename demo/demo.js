var app = angular.module('demo', ['ngSanitize', 'solvex.feedback']);

app.controller("MainController", function($scope) {
    $scope.sxConfig = {
        modalBody: undefined,
        useVSSAL: false,
        LoginVSSAL: function() {
            console.log("login vssal")
        },
        callback: function(feedback, feedbackSuccess) {
            console.log(feedback);
            return true;
        },
        feedbackMail: "diogenes.polanco@solvex.com.do",
        feedbackSubject: "Este es un nuevo subject para los feedback"
    };
});