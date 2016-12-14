contactsApp.constant('routes', [
        {
            name: "home",
            url: "/home",
            templateUrl: 'src/home/templates/home.html'
        },
        {
            name: 'contactDetails',
            url: '/details?id',
            templateUrl: 'src/editContact/templates/editContact.html',
            params: {
                'id': null
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