module.exports = function (grunt) {
    "use strict";

    // require it at the top and pass in the grunt instance 
    require('time-grunt')(grunt);

    const fs = require('fs');
    var EXPORT_PATH = "dist";
    var DATE = new Date().getTime().toString();

    grunt.initConfig(
        {
            clean: {
                app: [
                    EXPORT_PATH
                ]
            },

            copy: {
                app: {
                    files:
                    [
                        {
                            cwd: './scripts/',
                            src: '**/*.*',
                            dest: EXPORT_PATH + "/scripts",
                            expand: true
                        }, {
                            src: './index.html',
                            dest: EXPORT_PATH + "/index.html"
                        }
                    ]
                }
            },

            webpack: {
                app: require("./webpack.config.js"),
            },

            uglify: {
                dev: {
                    files: [{
                        expand: true,
                        src: [EXPORT_PATH + '/*.js'],
                        dest: './',
                        cwd: '.',
                        rename: function (dst, src) {
                            return src.replace('.js', '.min.js');
                        }
                    }]
                }
            },

            watch: {
                scripts: {
                    files: ['**/*.tsx'],
                    tasks: ['webpack:app'],
                    options: {
                        spawn: false,
                    },
                },
            },
        });

    grunt.loadNpmTasks("grunt-webpack");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("print-time", function () {
        var today = new Date();
        grunt.log.writeln("\nTime: " + today.toLocaleTimeString());
    });

    grunt.registerTask("default", [
        //"clean:app",
        //"copy:app",
        "webpack:app",
        //"watch",
        //"uglify:dev",
        "print-time"
        // 0.50774297
    ]);
};
