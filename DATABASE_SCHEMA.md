# Database Schema Documentation

This document outlines the database schema for the portfolio backend.

## Tables

### Projects Table

| Column Name | Data Type | Constraints | Description |
|-------------|-----------|-------------|-------------|
| id | SERIAL | PRIMARY KEY | Unique identifier for each project |
| title | VARCHAR(255) | NOT NULL | Project title |
| description | TEXT | NOT NULL | Detailed project description |
| image_url | TEXT | NOT NULL | URL to project image |
| github_url | TEXT | | GitHub repository URL |
| live_url | TEXT | | Live demo URL |
| created_at | TIMESTAMP | DEFAULT NOW() | Timestamp when project was added |

### Skills Table

| Column Name | Data Type | Constraints | Description |
|-------------|-----------|-------------|-------------|
| id | SERIAL | PRIMARY KEY | Unique identifier for each skill |
| name | VARCHAR(100) | NOT NULL | Skill name |
| category | VARCHAR(50) | NOT NULL | Skill category (frontend, backend, database, etc.) |
| level | INTEGER | NOT NULL CHECK (level >= 0 AND level <= 100) | Proficiency level (0-100) |
| created_at | TIMESTAMP | DEFAULT NOW() | Timestamp when skill was added |

### Messages Table (Contact Form Submissions)

| Column Name | Data Type | Constraints | Description |
|-------------|-----------|-------------|-------------|
| id | SERIAL | PRIMARY KEY | Unique identifier for each message |
| name | VARCHAR(255) | NOT NULL | Sender's name |
| email | VARCHAR(255) | NOT NULL | Sender's email |
| subject | VARCHAR(255) | | Message subject |
| message | TEXT | NOT NULL | Message content |
| created_at | TIMESTAMP | DEFAULT NOW() | Timestamp when message was sent |

## Relationships

- No direct relationships between tables in this simple schema
- In a more complex application, you might have a users table that owns projects

## Sample Queries

### Get all projects ordered by creation date
```sql
SELECT * FROM projects ORDER BY created_at DESC;
```

### Get skills by category
```sql
SELECT * FROM skills WHERE category = 'frontend' ORDER BY level DESC;
```

### Insert a new project
```sql
INSERT INTO projects (title, description, image_url, github_url, live_url)
VALUES ('E-Commerce Platform', 'A full-featured online store...', 'image-url', 'github-url', 'live-url');
```

## Notes

In a production environment, you would also consider:
- Adding indexes for frequently queried columns
- Implementing proper authentication and authorization
- Adding constraints for data validation
- Setting up proper backup and recovery procedures