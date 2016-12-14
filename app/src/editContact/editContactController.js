contactsApp.editContactController = function($scope, contactsProvider, $state){
    $scope.editmode = $state.params.new == "true";

    contactsProvider.getContact($state.params.id).then(function(contact){
        $scope.contact = contact;
    });
};

contactsApp.controller('editContactController', contactsApp.editContactController);