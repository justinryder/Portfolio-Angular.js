(function(app){
	app.directive('resumeJobSummary', function(){
		return {
			restrict: 'E',
			templateUrl: 'html/directives/resume-job-summary.html',
			controller: 'ResumeJobSummaryCtrl'
		};
	});
}(portfolioApp));