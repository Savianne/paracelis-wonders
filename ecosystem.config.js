module.exports = {
    apps: [
      {
        name: "nextjs-app-dev-paracelis-wonders",
        script: "node_modules/next/dist/bin/next",
        args: "dev -p 3003",       // Run in development mode on port 3001
        instances: 1,              // Use a single instance for dev
        watch: true,               // Automatically restart on file changes
        env: {
          NODE_ENV: "development", // Set environment to development
        },
      },
    ],
  };