# Full-Stack Developer Portfolio

A modern, responsive portfolio website showcasing full-stack development skills with both frontend and backend components.

## Features

- **Responsive Design**: Works on all devices from mobile to desktop
- **Modern UI**: Clean and professional design with smooth animations
- **Full-Stack Architecture**: Frontend served by a Node.js/Express backend
- **API Integration**: Dynamic content loading from backend APIs
- **Project Showcase**: Grid layout for displaying projects with tags
- **Contact Form**: Functional contact form with backend processing
- **Skills Visualization**: Progress bars to showcase technical abilities

## Tech Stack

### Frontend
- **HTML5**: Semantic markup for content structure
- **CSS3**: Flexbox and Grid for layouts, animations, and responsive design
- **JavaScript**: DOM manipulation and interactive elements
- **Font Awesome**: Icons for social media and UI elements

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **dotenv**: Environment variable management
- **cors**: Cross-Origin Resource Sharing middleware

## Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # Client-side JavaScript
├── server.js           # Node.js server
├── package.json        # Project dependencies and scripts
├── .env                # Environment variables
├── README.md           # This file
├── DEPLOYMENT.md       # Deployment guide
├── API_DOCS.md         # API documentation
├── DATABASE_SCHEMA.md  # Database schema documentation
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm run setup
   # or
   npm install
   ```

### Running the Application

#### Development Mode
```bash
npm run dev
```
This will start the server with nodemon for automatic restarts on file changes.

#### Production Mode
```bash
npm start
```
This will start the server normally.

The application will be available at `http://localhost:3000`

## API Endpoints

- `GET /api/projects` - Retrieve all projects
- `POST /api/contact` - Submit contact form
- `GET /api/skills` - Retrieve skills data

Full API documentation is available in [API_DOCS.md](API_DOCS.md)

## Customization

### Personal Information
Update the personal information in `index.html`:
- Name and title in the hero section
- About section content
- Contact information

### Projects
Modify the projects data in `server.js` in the `/api/projects` route.

### Skills
Modify the skills data in `server.js` in the `/api/skills` route.

### Styling
Customize the look and feel by modifying `styles.css`:
- Colors: Modify the color variables at the top
- Fonts: Change the font-family declarations
- Layout: Adjust grid and flexbox properties

## Deployment

This portfolio can be deployed to various hosting platforms. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions on deploying to:
- Vercel
- Render
- Heroku
- Netlify

## Database Integration

While this implementation uses static data, the [DATABASE_SCHEMA.md](DATABASE_SCHEMA.md) file provides a schema for implementing a database. You can integrate:
- MongoDB with Mongoose
- PostgreSQL with Sequelize or Prisma
- Firebase Realtime Database

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

This project is open source and available under the MIT License.

## Author

Full-Stack Developer Portfolio - Created to showcase web development skills and projects.
