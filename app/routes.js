(function () {
    angular.module('pr270').config(configRoutes);

    configRoutes.$inject = ['$stateProvider', ];

    function configRoutes($stateProvider) {
        $stateProvider

            .state('dashboardIndex', {
                url: '',
                views: {
                    'content': {
                        controller: 'DashboardController',
                        controllerAs: 'vm',
                        templateUrl: 'ng-html/components/dashboard/dashboard.view.html'
                    }
                }
            });


        //$urlRouterProvider.otherwise('/dashboard');
    }
}());
