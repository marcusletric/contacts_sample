contactsApp.constant('routes', [
        {
            name: 'Kezd�k�perny�',
            href: 'home'
        },
        {
            name: 'Betegfelv�tel',
            href: 'betegfelvetel?id',
            params: {
                'id': null
            }
        }
    ]
);

contactsApp.config(function($stateProvider, routes) {
        routes.forEach(function (route) {
            var stateHref = route.href.split('?')[0]
            $stateProvider.state(stateHref, {
                url: "/" + route.href,
                templateUrl: 'src/' + stateHref + '/templates/' + stateHref + '.html'
            });
        });
    }
);

contactsApp.run(function($state){
    if(!$state.current.name || $state.current.name == ''){
        $state.go('home');
    }
});