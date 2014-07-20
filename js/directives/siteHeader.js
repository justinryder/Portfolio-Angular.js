(function(app){
	app.directive('siteHeader', function(){
		return {
			restrict: 'E',
			templateUrl: 'html/directives/site-header.html'
		};
	});
}(portfolioApp));