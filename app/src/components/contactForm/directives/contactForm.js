contactsApp.components.contactForm = angular.module('contactsApp.components.contactForm',[]);

contactsApp.components.contactForm.directive('contactForm', function(){
    return {
        restrict: 'A',
        templateUrl: 'src/components/contactForm/templates/contactForm.html',
        replace: false,
        scope: {
            "contact" : "=",
            "editContact" : "="
        },
        link: function(scope,element,attrs){
        
        }
    }
});