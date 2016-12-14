contactsApp.components.contactList = angular.module('contactsApp.components.contactList',[]);

contactsApp.components.contactList.directive('contactList', function(){
    return {
        restrict: 'A',
        templateUrl: 'src/components/contactList/templates/contactList.html',
        replace: true,
        scope: {
            'contacts': '='
        }
    }
});