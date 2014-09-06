(function(app){
	app.directive('siteHeader', function(){
		return {
			restrict: 'E',
			templateUrl: 'html/site-header.html'
		};
	});
}(portfolioApp));