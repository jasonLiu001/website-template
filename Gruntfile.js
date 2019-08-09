module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            default: {
                tsconfig: './tsconfig.json'
            }
        },
        copy: {
            main: {
                files: [
                    // makes all src relative to cwd
                    {
                        expand: true,
                        cwd: "src/",
                        src: ['config/log4js.json', 'libs/**/**', 'static/**/**'],
                        dest: 'dist/'
                    },
                    {
                        expand: true,
                        src: ['package.json', 'yarn.lock'],
                        dest: 'dist/'
                    }
                ]
            }
        }
    });

    //加载typescript编译插件
    grunt.loadNpmTasks('grunt-ts');

    //复制图片这类的静态资源
    grunt.loadNpmTasks('grunt-contrib-copy');


    //执行的任务列表
    grunt.registerTask('default', ['ts', 'copy']);
};

