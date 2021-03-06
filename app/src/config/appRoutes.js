contactsApp.constant('routes', [
        {
            name: "home",
            url: "/home",
            templateUrl: 'src/home/templates/home.html',
            controller: 'homeController'
        },
        {
            name: 'contactDetails',
            url: '/details?id&edit&new',
            templateUrl: 'src/editContact/templates/editContact.html',
            controller: 'editContactController',
            params: {
                'id': null,
                'edit': null,
                'new': null
            }
        }
    ]
);

contactsApp.config(function($stateProvider, routes) {
        routes.forEach(function (route) {
            $stateProvider.state(route.name, route);
        });
    }
);

contactsApp.run(function($state){
    if(!$state.current.name || $state.current.name == ''){
        $state.go('home');
    }
});