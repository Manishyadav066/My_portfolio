# Setup and Installation Guide

This guide will help you set up and run your full-stack developer portfolio on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Setup Instructions

### 1. Install Node.js

If you don't have Node.js installed:

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the installation wizard
4. Restart your computer after installation

### 2. Fix PowerShell Execution Policy (Windows only)

The error you encountered is due to PowerShell's execution policy. To fix this:

1. Open PowerShell as Administrator:
   - Press Win + X
   - Select "Windows PowerShell (Admin)"

2. Run the following command:
   ```
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. Press Y when prompted to confirm

### 3. Install Dependencies

Navigate to your portfolio directory and install dependencies:

```bash
cd "d:\my potfolio"
npm install
```

### 4. Running the Application

#### Development Mode
```bash
npm run dev
```
This will start the server with nodemon, which automatically restarts the server when you make code changes.

#### Production Mode
```bash
npm start
```
This will start the server in production mode.

### 5. Accessing Your Portfolio

Once the server is running, open your browser and navigate to:
```
http://localhost:3000
```

## Troubleshooting

### Common Issues

1. **Port already in use**: If you see an error about the port being in use, you can change the port in the `.env` file:
   ```
   PORT=3001
   ```

2. **Permission errors**: On macOS or Linux, you might need to use `sudo` for global installations:
   ```bash
   sudo npm install
   ```

3. **Missing dependencies**: If you encounter errors about missing modules, try:
   ```bash
   npm install --save express cors dotenv
   npm install --save-dev nodemon
   ```

### Resetting Node Modules

If you continue to have issues:

1. Delete the `node_modules` folder
2. Delete the `package-lock.json` file
3. Run `npm install` again

### Alternative: Use Yarn

If npm continues to give you trouble, you can use Yarn instead:

1. Install Yarn:
   ```bash
   npm install -g yarn
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Run the application:
   ```bash
   yarn dev
   ```

## Development Workflow

1. Start the development server: `npm run dev`
2. Make changes to your files
3. View changes in your browser at `http://localhost:3000`
4. The server will automatically restart when you save changes

## Customization

### Changing Content

- Modify `index.html` to update personal information
- Update project data in `server.js` in the `/api/projects` route
- Modify skills data in `server.js` in the `/api/skills` route

### Styling

- Update `styles.css` to change colors, fonts, and layout
- Add new styles for additional components

### Adding Functionality

- Add new routes in `server.js` for additional API endpoints
- Add new JavaScript functionality in `script.js`
- Create new HTML sections in `index.html`

## Deployment

For deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## Support

If you continue to have issues:

1. Check that all prerequisites are installed correctly
2. Ensure you're in the correct directory
3. Try restarting your terminal/command prompt
4. Consult the Node.js and npm documentation