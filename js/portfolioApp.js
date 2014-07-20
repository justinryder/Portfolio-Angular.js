var portfolioApp = (function(angular){
	var app = angular.module('portfolioApp', []);

	app.config(function($routeProvider) {
		$routeProvider
			.when('/home', {controller:'HomeController', templateUrl:'html/home.html'})
			.when('/projects', {controller:'ProjectsController', templateUrl:'html/projects.html'})
			.when('/resume', {controller:'ResumeController', templateUrl:'html/resume.html'})
			.when('/education', {controller:'EducationController', templateUrl:'html/education.html'})
			.when('/about', {controller:'AboutController', templateUrl:'html/about.html'})
			.when('/contact', {controller:'ContactController', templateUrl:'html/contact.html'})
			.otherwise({redirectTo:'/home'});
	});

	return app;
})(angular);