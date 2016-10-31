angular.module("app").controller("aiContentCtrl", function ($scope, aiContentService, $state, $stateParams) {
    $scope.aiContents = [];
    $scope.IsSubmit = false;

    if ($state.current.name == "aicontents") {
        
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
                        $state.go("aicontents");
                    }
                }).error(function (err) {
                    console.log(err);
                });
            } else {
                aiContentService.createAiContent(aiContent).success(function (data) {
                    if (data == "added") {
                        $state.go("aicontents");
                    }
                });
            }
        }
    };

    $scope.deleteAiContent = function (id) {
        if (confirm('Are you sure to delete?')) {
            aiContentService.deleteAiContent(id).success(function (data) {
                if (data == "deleted") {
                    $state.go("aicontents", {}, {reload: true});
                }
            });
        }
    };

    if ($state.current.name == "edit") {
        var id = $stateParams.id;        
        aiContentService.getAiContent(id).then(function (response) {
            $scope.aiContent = response.data;
        });
    }
});
