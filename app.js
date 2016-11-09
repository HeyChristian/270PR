(function () {
   
    angular.module('pr270', ['ui.router']);
}());

(function () {
    angular.module('pr270').config(configRoutes);

    configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configRoutes($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('dashboard',{
            url:'',
            templateUrl:'ng-html/components/dashboard/dashboard.view.html'
        })
            // .state('dashboardIndex', {
            //     url: '/dashboard',
            //     views: {
            //         'content': {
            //             controller: 'DashboardController',
            //             controllerAs: 'vm',
            //             templateUrl: 'ng-html/components/dashboard/dashboard.view.html'
            //         }
            //     }
            // });


        $urlRouterProvider.otherwise('/dashboard');
    }
}());

(function() {
   
    angular.module('pr270').controller('DashboardController2', DashboardController2);


    DashboardController2.$inject = [];

    function DashboardController2() {


        var vm = this;
        (function () {
                $log.log('dashboard initialization');
            
        }());
    }
}());
(function() {
   
    angular.module('pr270').controller('MainController', MainController);


    MainController.$inject = [];

    function MainController() {


        var vm = this;
        vm.isMainController = true;
  
    }
}());
//# sourceMappingURL=app.js.map
