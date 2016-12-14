contactsApp.components.contactForm = angular.module('contactsApp.components.contactForm',[]);

contactsApp.components.contactForm.directive('contactForm', function(contactsProvider,$state){
    return {
        restrict: 'A',
        templateUrl: 'src/components/contactForm/templates/contactForm.html',
        replace: false,
        scope: {
            "contact" : "=",
            "editContact" : "="
        },
        controller: function($scope){
            $scope.contact = angular.copy($scope.contact,{});

            $scope.save = function(){
                contactsProvider.storeContact($scope.contact);
                $scope.editContact = false;
            };

            $scope.cancel = function(){
                contactsProvider.getContact($scope.contact.id).then(function(contact){
                    $scope.contact = angular.copy(contact,{});
                });
                $scope.editContact = false;
            }
        }
    }
});