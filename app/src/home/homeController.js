contactsApp.controller('homeController', function($scope, contactsProvider){
    $scope.loadedContacts = [];

    contactsProvider.getContacts().then(function(contacts){
        $scope.loadedContacts = contacts;
    },function(error){
        console.error(error);
    });
});