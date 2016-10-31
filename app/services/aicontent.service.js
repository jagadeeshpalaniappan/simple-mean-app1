angular.module("app").factory("aiContentService", function ($http, globalConfig, $q) {
    var url = "";
    return {
        getAiContents: function () {
            url = globalConfig.apiAddress + "/apicontents";
            
            return $http.get(url).then(
                function (response) {
                    return response.data;
                },
                function (err) {
                    console.log(err)
                }
            )
        },
        getAiContent: function (id) {
            url = globalConfig.apiAddress + "/apicontent/" + id;
            
            var promise = $http.get(url);
            var deffered = $q.defer();
            promise.then(function (response) {
                deffered.resolve(response);
            }).catch(function (err) {
                deffered.reject(err);
            });
            return deffered.promise;
        },
        createAiContent: function (aiContent) {
            url = globalConfig.apiAddress + "/create";
            return $http.post(url, aiContent);
        },
        updateAiContent: function (aiContent) {
            url = globalConfig.apiAddress + "/update/" + aiContent._id;
            return $http.put(url, aiContent);
        },
        deleteAiContent: function (id) {
            url = globalConfig.apiAddress + "/delete/" + id;
            return $http.delete(url);
        }
    }
});
