/**
 *
 * PM2 的配置文件 切换到项目根目录 执行: pm2 start 可以直接启动项目
 */
module.exports = {
    apps: [
        {
            name: "Server",
            script: "./Server.js",
            cwd: "dist/",//当前工作目录
            max_memory_restart: '8G',//超过8G内存重启程序
            node_args: "--max_old_space_size=8192",
            env: {
                NODE_ENV: "production"
            },
            env_development: {
                NODE_ENV: "development"
            }
        }
    ]
};
