(function () {
    angular.module('pr270').config(configRoutes);

    configRoutes.$inject = ['$stateProvider','$urlRouterProvider' ];

    function configRoutes($stateProvider,$urlRouterProvider) {
        

        $stateProvider
            .state('dashboardIndex', {
                url: '/dashboard',
                views: {
                    'content': {
                        controller: 'DashboardController',
                        controllerAs: 'vm',
                        templateUrl: './ng-html/components/dashboard/dashboard.view.html'
                    }
            }})
             .state('menu', {
                url: '/menu',
                // views: {
                //     'content': {
                //         controller: 'DashboardController',
                //         controllerAs: 'vm',
                //         templateUrl: './ng-html/components/dashboard/dashboard.view.html'
                //     }
                // }    
            });


        $urlRouterProvider.otherwise('/dashboard');
    }
}());
