module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    connect: {
      server: {
        options: {
          port: 9001,
          base: "./",
          keepalive: true
        }
      }
    },
  });

  grunt.loadNpmTasks("grunt-contrib-connect");

  grunt.registerTask("default", "connect");
};
