module.exports = function(grunt){
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                //banner:'/*!<%=pkg.name %><%=grunt.template.today("yyyy-mm-dd")%>/n*/'
            },
            build: {
                src: 'client/service_app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular/angular-csp.css",
                    "jquery/dist/jquery.js",
                    "jquery/dist/jquery.min.js",
                    "jquery/dist/jquery.map.js",
                    "angular-route/angular-route.min.js"
                ],
                "dest": "server/public/vendors/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Default Task(s).
    grunt.registerTask('default', ['copy', 'uglify']);
};













