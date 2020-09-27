app.config(function ($routeProvider) {
    $routeProvider
        .when("/test", {
            templateUrl: "Component/Test.html",
            controller: "TestController"
        })
       
});