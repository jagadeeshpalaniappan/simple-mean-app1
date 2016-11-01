angular.module("app", ["ui.router", "ngTagsInput"])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider.state("home", {
            url: "/",
            templateUrl: "/views/home.html",
            controller: "homeCtrl"
        }) .state('ai', {
            abstract: true,
            url: '/ai',
            templateUrl: "/views/aicontent/index.html"
        }).state("ai.list", {
            url: "/list",
            templateUrl: "/views/aicontent/aicontents.html",
            controller: "aiContentCtrl"
        }).state("ai.create", {
            url: "/create",
            templateUrl: "/views/aicontent/create.html",
            controller: "aiContentCtrl"
        }).state("ai.edit", {
            url: "/edit/:id",
            templateUrl: "/views/aicontent/create.html",
            controller: "aiContentCtrl"
        }).state("aicontent.details", {
            url: "/details/:id",
            templateUrl: "/views/aicontent/details.html",
            controller: "aiContentCtrl"
        });
    })
    .constant("globalConfig", {
        apiAddress: 'http://localhost:4000/api/aiservice'
    })
    .run(function ($rootScope, $state) {

        $rootScope.$state = $state;

    });


angular.module("app").controller("homeCtrl", function ($scope) {


});