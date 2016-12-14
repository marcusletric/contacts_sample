contactsApp.services.contactsProvider = angular.module('contactsApp.services.contactsProvider',[]);

contactsApp.services.contactsProvider.service('contactsProvider', function($http,config,$q){
        var self = this;

        self.getContacts = function() {
            var deferred = $q.defer();

            $http.get(config.contactsServiceUrl).then(function (response) {
                deferred.resolve(angular.fromJson(response.data));
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }
});