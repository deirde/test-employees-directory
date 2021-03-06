'use strict';

angular.module('app', [
    'ngTouch',
    'ngRoute',
    'ngAnimate'
]).config(['$routeProvider', function ($routeProvider) {
    var genericRT = {
        templateUrl: 'views/container.html', 
        controller: 'EmployeeCtrl'
    };
    $routeProvider.when('/employees', genericRT);
    $routeProvider.when('/employees/:employeeId', genericRT);
    $routeProvider.when('/employees/:employeeId/:reports', genericRT);
    $routeProvider.otherwise({redirectTo: '/employees'});
}]);

angular.module('app').controller('MainCtrl',
    ['$scope', '$rootScope', '$window', '$location',
    function ($scope, $rootScope, $window, $location) {
        $scope.slider = '';
        $rootScope.back = function() {
            $scope.slider = 'slider-right';
            $window.history.back();
        }
        $rootScope.go = function(path) {
            $scope.slider = 'slider-left';
            $location.url(path);
        }
    }
]).controller('EmployeeCtrl',
    ['$scope', '$routeParams', 'Employee', 'Report',
    function ($scope, $routeParams, Employee, Report) {
        $scope.getEmployeeCount = Employee.getEmployeeCount;
        if ($routeParams.employeeId === undefined) {
            $scope.view = 'list';
            $scope.employees = Employee.query();
        } else if ($routeParams.employeeId !== undefined
            && $routeParams.reports === undefined) {
            $scope.view = 'details';
            $scope.employee = Employee.get({employeeId: $routeParams.employeeId});
        } else {
            $scope.view = 'reports';
            $scope.employees = Report.query({employeeId: $routeParams.employeeId});
        }
    }
]);
    
var employees = [
    {"id": 1, "firstName": "Charles Montgomery", "lastName": "Burns", "managerId": 0, "managerName": "", "title": "President and CEO", "department": "Engineering", "cellPhone": "+31 000 000 001", "officePhone": "+31 600 000 001", "email": "burns@the-simpsons.com", "city": "Springfield", "picture": "mr_burns.png", "twitterId": "@burns", "blog": "http://www.brightcomputing.com"},
    {"id": 2, "firstName": "Bart", "lastName": "Simpson", "managerId": 1, "managerName": "Charles Montgomery Burns", "title": "VP of Marketing", "department": "Marketing", "cellPhone": "+31 000 000 002", "officePhone": "+31 600 000 002", "email": "bart@the-simpsons.com", "city": "Springfield", "picture": "bart.png", "twitterId": "@bart", "blog": "http://www.brightcomputing.com"},
    {"id": 3, "firstName": "Marge", "lastName": "Simpson", "managerId": 1, "managerName": "Charles Montgomery Burns", "title": "CFO", "department": "Accounting", "cellPhone": "+31 000 000 003", "officePhone": "+31 600 000 003", "email": "marge@the-simpsons.com", "city": "Springfield", "picture": "marge.png", "twitterId": "@marge", "blog": "http://www.brightcomputing.com"},
    {"id": 4, "firstName": "Lisa", "lastName": "Simpson", "managerId": 1, "managerName": "Charles Montgomery Burns", "title": "VP of Engineering", "department": "Engineering", "cellPhone": "+31 000 000 004", "officePhone": "+31 600 000 004", "email": "lisa@the-simpsons.com", "city": "Springfield", "picture": "lisa.png", "twitterId": "@lisa", "blog": "http://www.brightcomputing.com"},
    {"id": 5, "firstName": "Maggie", "lastName": "Simpson", "managerId": 1, "managerName": "Charles Montgomery Burns", "title": "VP of Sales", "department": "Sales", "cellPhone": "+31 000 000 005", "officePhone": "+31 600 000 005", "email": "maggie@the-simpsons.com", "city": "Springfield", "picture": "maggie.png", "twitterId": "@maggie", "blog": "http://www.brightcomputing.com"},
    {"id": 6, "firstName": "Homer", "lastName": "Simpson", "managerId": 4, "managerName": "Lisa Simpson", "title": "QA Manager", "department": "Corporate", "cellPhone": "+31 000 000 006", "officePhone": "+31 600 000 006", "email": "homer@the-simpsons.com", "city": "Springfield", "picture": "homer.png", "twitterId": "@homer", "blog": "http://www.brightcomputing.com"},
    {"id": 7, "firstName": "Ned", "lastName": "Flanders", "managerId": 4, "managerName": "Lisa Simpson", "title": "Software Architect", "department": "Engineering", "cellPhone": "+31 000 000 007", "officePhone": "+31 600 000 007", "email": "ned@the-simpsons.com", "city": "Springfield", "picture": "ned_flanders.png", "twitterId": "@ned", "blog": "http://www.brightcomputing.com"},
    {"id": 8, "firstName": "Krusty", "lastName": "The Clown", "managerId": 2, "managerName": "Bart Simpson", "title": "Marketing Manager", "department": "Marketing", "cellPhone": "+31 000 000 008", "officePhone": "+31 600 000 008", "email": "krusty@the-simpsons.com", "city": "Springfield", "picture": "krusty.png", "twitterId": "@krusty", "blog": "http://www.brightcomputing.com"},
    {"id": 9, "firstName": "Waylon", "lastName": "Smithers", "managerId": 2, "managerName": "Bart Simpson", "title": "Marketing Manager", "department": "Marketing", "cellPhone": "+31 000 000 009", "officePhone": "+31 600 000 009", "email": "smithers@the-simpsons.com", "city": "Springfield", "picture": "smithers.png", "twitterId": "@smithers", "blog": "http://www.brightcomputing.com"},
    {"id": 10, "firstName": "Ralph", "lastName": "Wiggum", "managerId": 5, "managerName": "Maggie Simpson", "title": "Sales Representative", "department": "Sales", "cellPhone": "+31 000 000 010", "officePhone": "+31 600 000 010", "email": "ralph@the-simpsons.com", "city": "Springfield", "picture": "ralph.png", "twitterId": "@ralph", "blog": "http://www.brightcomputing.com"},
    {"id": 11, "firstName": "Itchy", "lastName": "", "managerId": 5, "managerName": "Maggie Simpson", "title": "Sales Representative", "department": "Sales", "cellPhone": "+31 000 000 011", "officePhone": "+31 600 000 011", "email": "itchy@the-simpsons.com", "city": "Springfield", "picture": "itchy.png", "twitterId": "@itchy", "blog": "http://www.brightcomputing.com"},
    {"id": 12, "firstName": "Comic Book Guy", "lastName": "", "managerId": 4, "managerName": "Lisa Simpson", "title": "Software Architect", "department": "Engineering", "cellPhone": "+31 000 000 012", "officePhone": "+31 600 000 012", "email": "comicguy@the-simpsons.com", "city": "Springfield", "picture": "comic.png", "twitterId": "@comicguy", "blog": "http://www.brightcomputing.com"}
],findById = function (id) {
    var employee = null, l = employees.length, i;
    for (i = 0; i < l; i = i + 1) {
        if (employees[i].id === id) { 
            employee = employees[i];
            break;
        }
    }
    return employee;
},findByManager = function (managerId) {
    var results = employees.filter(function (element) {
        return managerId === element.managerId;
    });
    return results;
},getEmployeeCount = function (managerId) {
    var count=  0;
    employees.forEach(function (element) {
         managerId === element.managerId ? count++ : null;
    });
    return count;
};

angular.module('app').factory('Employee', [
    function () {
        return {
            query: function () {
                return employees;
            },
            get: function (employee) {
                return findById(parseInt(employee.employeeId));
                
            },
            getEmployeeCount:function (id) {
                return getEmployeeCount(id);
                
            }
        }
    }
]).factory('Report', [
    function () {
        return {
            query: function (employee) {
                return findByManager(parseInt(employee.employeeId));
            }
        }
    }
]);