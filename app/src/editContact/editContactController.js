contactsApp.controller('editContactController', function($scope, contactsProvider, $state){
    $scope.editmode = $state.params.edit == "true";
    contactsProvider.getContact($state.params.id).then(function(contact){
        $scope.contact = contact;
    });
});