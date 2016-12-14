contactsApp.services.contactsProvider = angular.module('contactsApp.services.contactsProvider',[]);

contactsApp.services.contactsProvider.service('contactsProvider', function($http, storageProvider, config, sampleData, $q){
        var self = this;

        var contactsCache = [];

        self.getContacts = function(forceRequest) {
            var deferred = $q.defer();

            if(contactsCache.length > 0 && !forceRequest){
                deferred.resolve(contactsCache);
            } else {
                var data = storageProvider.read('contacts');

                if(!data){
                    $http.get(config.contactsServiceUrl).then(function (response) {
                        data = angular.fromJson(response.data);
                        proceed();
                    }, function (error) {
                        data = sampleData;
                        proceed();
                        deferred.reject(error);
                    });
                } else {
                    proceed();
                }

                function proceed(){
                    deferred.resolve(data);
                }
            }

            return deferred.promise;
        };

        self.getContact = function (id, forceRequest){
            var deferred = $q.defer();

            if(contactsCache.length > 0 && !forceRequest) {
                deferred.resolve(findContact(id));
            } else {
                self.getContacts().then(function(){
                    deferred.resolve(findContact(id));
                });
            }

            function findContact(id){
                return contactsCache.find(function(contact){
                    return contact.id == id;
                });
            }

            return deferred.promise;
        }
});