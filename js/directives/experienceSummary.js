(function(app){
	app.directive('experienceSummary', function(){
		return {
			restrict: 'E',
			templateUrl: 'html/directives/experience-summary.html',
			scope: {
				title: '=',
				advanced: '=',
				basic: '='
			}
		};
	});
}(portfolioApp));