module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //config
        watch: {
            compass: {
                files: ['src/sass/**/*.{scss,sass}'],
                tasks: ['compass:dev']
            },
            html: {
                files: ['src/**/*.html'],
                tasks: ['copy:html']
            },
            images: {
                files: ['src/images/**/*'],
                tasks: ['copy:images']
            },
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['uglify']
            },
            json: {
                files: ['src/json/**/*.json'],
                tasks: ['copy:json']
            }
        },
        compass: {
            dev: {
                options: {
                    sassDir: ['src/sass'],
                    cssDir: ['app/css'],
                    environment: 'development'
                }
            },
            prod: {
                options: {
                    sassDir: ['src/sass'],
                    cssDir: ['app/css'],
                    environment: 'production'
                }
            }
        },
        uglify: {
            all: {
                options: {
                    beautify: true
                },
                files: {
                    'app/js/app.js': [

                        'src/js/portfolioApp.js',

                        'src/js/controllers/HeaderController.js',
                        'src/js/directives/siteHeader.js',

                        'src/js/controllers/HomeController.js',

                        'src/js/controllers/MenuController.js',
                        'src/js/controllers/AboutController.js',
                        'src/js/controllers/EducationController.js',
                        'src/js/controllers/ProjectsController.js',
                        'src/js/controllers/ProjectController.js',
                        'src/js/controllers/ResumeController.js',

                        'src/js/directives/resumeJobSummary.js',
                        'src/js/directives/semesterClassSummary.js',
                        'src/js/directives/experienceSummary.js',
                        'src/js/directives/linkOrSpan.js'
                    ]
                }
            }
        },
        copy: {
            html: {
                files: [
                    {
                        src: 'src/index.html',
                        dest: 'app/index.html'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'src/html/**/*.html',
                        dest: 'app/html/'
                    }
                ]
            },
            images: {
                expand: true,
                flatten: true,
                src: 'src/images/**/*',
                dest: 'app/images/'
            },
            json: {
                expand: true,
                flatten: true,
                src: 'src/json/**/*.json',
                dest: 'app/json/'
            }
        }
    });

    // dependencies
    loadNpmDependencies([
            'grunt-contrib-watch',
            'grunt-contrib-compass',
            'grunt-contrib-uglify',
            'grunt-contrib-copy'
        ]);

    // tasks
    grunt.registerTask('default', [
            'compass:dev',
            'uglify',
            'copy'
        ]);

    function loadNpmDependencies(tasks){
        for (var i = 0; i < tasks.length; i++){
            grunt.loadNpmTasks(tasks[i]);
        }
    }
};