module.exports = {
    apps: [{
        name: "node-structure",
        script: "./server.js",
        exec_mode: 'cluster',
        instances: 4,
        watch: true,
        ignore_watch: ["node_modules"],
        env_production: {
            NODE_ENV: "production"
        },
        env_development: {
            NODE_ENV: "development"
        }
    }]