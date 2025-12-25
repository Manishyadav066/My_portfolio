# Deployment Guide

This guide explains how to deploy your full-stack portfolio to various hosting platforms.

## Prerequisites

Before deploying, make sure you have:
1. A GitHub account
2. Node.js installed locally (for testing)
3. An account with your chosen hosting provider

## Deployment Options

### Option 1: Deploy to Vercel (Frontend Only)

Vercel offers excellent support for static sites and frontend frameworks.

1. Push your code to GitHub
2. Sign up/log in to [Vercel](https://vercel.com/)
3. Click "New Project"
4. Import your GitHub repository
5. Configure the project:
   - Framework Preset: Other
   - Root Directory: Leave empty
   - Build Command: `npm run build` (if you add a build step)
   - Output Directory: `.` (current directory)
6. Click "Deploy"

### Option 2: Deploy to Render (Full-Stack)

Render supports both static sites and Node.js servers.

1. Push your code to GitHub
2. Sign up/log in to [Render](https://render.com/)
3. Click "New Web Service"
4. Connect your GitHub repository
5. Configure the service:
   - Name: Your choice
   - Region: Choose appropriate region
   - Branch: main/master
   - Root Directory: Leave empty
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Click "Create Web Service"

### Option 3: Deploy to Heroku (Full-Stack)

Heroku is a popular platform for Node.js applications.

1. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
2. Log in to Heroku CLI: `heroku login`
3. Create a new Heroku app: `heroku create your-app-name`
4. Set Git remote: `heroku git:remote -a your-app-name`
5. Deploy: `git push heroku master`

### Option 4: Deploy to Netlify (Frontend Only)

Netlify is great for static sites with continuous deployment.

1. Push your code to GitHub
2. Sign up/log in to [Netlify](https://netlify.com/)
3. Click "New site from Git"
4. Connect to your GitHub account
5. Select your repository
6. Configure deployment settings:
   - Branch to deploy: main/master
   - Build command: Leave empty (or add build command if needed)
   - Publish directory: `./`
7. Click "Deploy site"

## Environment Variables

When deploying, make sure to set the following environment variables in your hosting platform:

- `PORT`: The port your application should listen on (typically provided by the platform)
- `NODE_ENV`: Set to "production"

## Database Considerations

For a production portfolio, you might want to use a hosted database service:

- MongoDB Atlas for MongoDB
- Supabase or PlanetScale for PostgreSQL
- Firebase Realtime Database for a fully managed solution

## Custom Domain

Most hosting platforms allow you to connect a custom domain:

1. Purchase a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In your hosting platform, navigate to domain settings
3. Add your custom domain
4. Follow the platform's instructions to configure DNS records

## Monitoring and Analytics

Consider adding these services to monitor your portfolio:

- Google Analytics for traffic insights
- Sentry for error tracking
- UptimeRobot for monitoring uptime

## Performance Optimization

Before deploying, consider these optimizations:

1. Minify CSS and JavaScript files
2. Optimize images (use WebP format when possible)
3. Enable gzip compression
4. Add caching headers
5. Use a CDN for static assets

## Continuous Deployment

Set up continuous deployment to automatically deploy changes when you push to your repository:

1. Most hosting platforms support this out of the box
2. Configure your deployment settings to trigger on pushes to your main branch
3. Add tests to your workflow to ensure quality

## Troubleshooting

Common deployment issues:

1. **Build failures**: Check logs in your hosting platform's dashboard
2. **Environment variables not set**: Make sure all required env vars are configured
3. **Port issues**: Ensure your app listens on the port provided by the platform (process.env.PORT)
4. **Dependency issues**: Make sure all dependencies are in package.json

## Best Practices

1. Always test locally before deploying
2. Use environment variables for configuration
3. Set up proper error handling
4. Monitor your application after deployment
5. Regularly update dependencies