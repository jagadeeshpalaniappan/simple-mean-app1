angular.module("app", ["ui.router","ngTagsInput"])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider.state("aicontents", {
            url: "/",
            templateUrl: "/views/aicontent/aicontents.html",
            controller: "aiContentCtrl"
        }).state("create", {
            url: "/create",
            templateUrl: "/views/aicontent/create.html",
            controller: "aiContentCtrl"
        }).state("edit", {
            url: "/edit/:id",
            templateUrl: "/views/aicontent/create.html",
            controller: "aiContentCtrl"
        }).state("details", {
            url: "/details/:id",
            templateUrl: "/views/aicontent/details.html",
            controller: "aiContentCtrl"
        });
    })
    .constant("globalConfig", {
        apiAddress: 'http://localhost:4000/api/aiservice'
    });
