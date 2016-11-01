angular.module("app").controller("aiContentCtrl", function ($scope, aiContentService, $state, $stateParams) {
    $scope.aiContents = [];
    $scope.IsSubmit = false;

    $scope.tags = [
        { text: 'just' },
        { text: 'some' },
        { text: 'cool' },
        { text: 'tags' }
    ];


    if ($state.current.name == "ai.list") {
        
        aiContentService.getAiContents().then(function (response) {
                $scope.aiContents=response;
            },
            function (err) {
                console.log(err);
            }
        );
    }

    $scope.saveData = function (aiContent) {
        $scope.IsSubmit = true;
        if ($scope.aiContentForm.$valid) {

            if (aiContent._id) {
                aiContentService.updateAiContent(aiContent).success(function (data) {
                    console.log(data);
                    if (data == "updated") {
                        $state.go("ai.list");
                    }
                }).error(function (err) {
                    console.log(err);
                });
            } else {
                aiContentService.createAiContent(aiContent).success(function (data) {
                    if (data == "added") {
                        $state.go("ai.list");
                    }
                });
            }
        }
    };

    $scope.deleteAiContent = function (id) {
        if (confirm('Are you sure to delete?')) {
            aiContentService.deleteAiContent(id).success(function (data) {
                if (data == "deleted") {
                    $state.go("ai.list", {}, {reload: true});
                }
            });
        }
    };

    if ($state.current.name == "ai.edit") {
        var id = $stateParams.id;        
        aiContentService.getAiContent(id).then(function (response) {
            $scope.aiContent = response.data;
        });
    }
});
