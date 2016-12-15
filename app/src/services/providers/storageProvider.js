contactsApp.services.storageProvider = angular.module('contactsApp.services.storageProvider',[]);

contactsApp.services.storageProvider.service('storageProvider', function($window){
    this.store = function(id,data){
        $window.localStorage.setItem(id,angular.toJson(data));
    };

    this.read = function(id){
        return angular.fromJson($window.localStorage.getItem(id));
    };

    this.clear = function(id){
        $window.localStorage.setItem(id,null);
    };
});