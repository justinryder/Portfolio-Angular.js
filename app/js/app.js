var portfolioApp = function(a) {
    var b = a.module("portfolioApp", []);
    return b.config([ "$routeProvider", function(a) {
        a.when("/home", {
            controller: "HomeController",
            templateUrl: "html/home.html"
        }).when("/projects", {
            controller: "ProjectsController",
            templateUrl: "html/projects.html"
        }).when("/projects/:project", {
            controller: "ProjectController",
            templateUrl: "html/project.html"
        }).when("/resume", {
            controller: "ResumeController",
            templateUrl: "html/resume.html"
        }).when("/education", {
            controller: "EducationController",
            templateUrl: "html/education.html"
        }).when("/about", {
            controller: "AboutController",
            templateUrl: "html/about.html"
        }).when("/contact", {
            controller: "ContactController",
            templateUrl: "html/contact.html"
        }).otherwise({
            redirectTo: "/home"
        });
    } ]), b;
}(angular);

!function(a) {
    a.controller("HeaderController", [ "$scope", function(a) {
        a.siteName = "Justin Ryder", a.siteSlogan = "Game Programmer";
    } ]);
}(portfolioApp), function(a) {
    a.directive("siteHeader", function() {
        return {
            restrict: "E",
            templateUrl: "html/site-header.html"
        };
    });
}(portfolioApp), function(a) {
    a.controller("HomeController", [ "$scope", function(a) {
        a.title = "Home Page";
    } ]);
}(portfolioApp), function(a) {
    a.controller("MenuController", [ "$scope", "$log", "$http", function(a, b, c) {
        a.title = "Menu", c.get("json/menuLinks.json").success(function(b) {
            a.links = b;
        }).error(function(a) {
            b.error("Failed to load menu links."), b.log(a);
        });
    } ]);
}(portfolioApp), function(a) {
    a.controller("AboutController", [ "$scope", "$log", "$http", function(a, b, c) {
        c.get("json/contactLinks.json").success(function(b) {
            a.contactLinks = b;
        }).error(function(a) {
            b.error("Failed to load contactLinks."), b.log(a);
        }), c.get("json/technicalExperience.json").success(function(b) {
            a.programmingExperience = b.programming, a.softwareExperience = b.software, a.osExperience = b.operatingSystems;
        });
    } ]);
}(portfolioApp), function(a) {
    a.controller("EducationController", [ "$scope", "$http", function(a, b) {
        a.education = "Education", b.get("json/classesBySemester.json").success(function(b) {
            a.classesBySemester = b;
        });
    } ]);
}(portfolioApp), function(a) {
    a.controller("ProjectsController", [ "$scope", "$log", "$http", function() {} ]);
}(portfolioApp), function(a) {
    a.controller("ProjectController", [ "$scope", "$log", "$http", "$routeParams", function(a, b, c, d) {
        c.get("json/projects/" + d.project + ".json").success(function(b) {
            a.project = b;
        }).error(function(a) {
            b.error("Failed to load project " + d.project + "."), b.log(a);
        });
    } ]);
}(portfolioApp), function(a) {
    a.controller("ResumeController", [ "$scope", "$http", function(a, b) {
        a.resume = "Resume", b.get("json/resumeJobSummaries.json").success(function(b) {
            a.jobSummaries = b;
        });
    } ]);
}(portfolioApp), function(a) {
    a.directive("resumeJobSummary", function() {
        return {
            restrict: "E",
            templateUrl: "html/resume-job-summary.html",
            scope: {
                job: "="
            }
        };
    });
}(portfolioApp), function(a) {
    a.directive("semesterClassSummary", function() {
        return {
            restrict: "E",
            templateUrl: "html/semester-class-summary.html",
            scope: {
                semester: "="
            }
        };
    });
}(portfolioApp), function(a) {
    a.directive("experienceSummary", function() {
        return {
            restrict: "E",
            templateUrl: "html/experience-summary.html",
            scope: {
                title: "=",
                advanced: "=",
                basic: "="
            }
        };
    });
}(portfolioApp), function(a) {
    a.directive("linkOrSpan", function() {
        return {
            restrict: "E",
            templateUrl: "html/link-or-span.html",
            transclude: !0,
            scope: {
                url: "="
            }
        };
    });
}(portfolioApp);