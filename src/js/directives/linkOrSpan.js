(function(app){
	app.directive('linkOrSpan', function(){
		return {
			restrict: 'E',
			templateUrl: 'html/link-or-span.html',
			transclude: true,
			scope: {
				url: '='
			}
		};
	});
}(portfolioApp));