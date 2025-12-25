# API Documentation

This document describes the backend API endpoints for the portfolio application.

## Base URL

All API endpoints are relative to the base URL:
```
/api
```

## Endpoints

### Get Projects

Retrieve all projects for the portfolio.

**URL**: `/projects`  
**Method**: `GET`  
**Auth Required**: No  
**Permissions Required**: None  

#### Success Response

**Code**: `200 OK`  
**Content Example**:
```json
[
  {
    "id": 1,
    "title": "E-Commerce Platform",
    "description": "A full-featured e-commerce platform built with React, Node.js, and MongoDB.",
    "technologies": ["React", "Node.js", "MongoDB"],
    "imageUrl": "https://example.com/project1.jpg",
    "githubUrl": "https://github.com/user/project1",
    "liveUrl": "https://project1.example.com"
  }
]
```

#### Error Response

**Code**: `500 Internal Server Error`  
**Content**:
```json
{
  "error": "Failed to fetch projects"
}
```

---

### Submit Contact Form

Submit a contact form message.

**URL**: `/contact`  
**Method**: `POST`  
**Auth Required**: No  
**Permissions Required**: None  

#### Data Parameters

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I would like to discuss a project..."
}
```

#### Success Response

**Code**: `200 OK`  
**Content**:
```json
{
  "success": true,
  "message": "Message received! I will get back to you soon."
}
```

#### Error Response

**Code**: `400 Bad Request`  
**Content**:
```json
{
  "success": false,
  "message": "Missing required fields"
}
```

**Code**: `500 Internal Server Error`  
**Content**:
```json
{
  "success": false,
  "message": "Failed to send message"
}
```

---

### Get Skills

Retrieve all skills categorized by type.

**URL**: `/skills`  
**Method**: `GET`  
**Auth Required**: No  
**Permissions Required**: None  

#### Success Response

**Code**: `200 OK`  
**Content Example**:
```json
{
  "frontend": [
    {
      "name": "HTML/CSS",
      "level": 95
    }
  ],
  "backend": [
    {
      "name": "Node.js",
      "level": 85
    }
  ],
  "database": [
    {
      "name": "MongoDB",
      "level": 80
    }
  ]
}
```

#### Error Response

**Code**: `500 Internal Server Error`  
**Content**:
```json
{
  "error": "Failed to fetch skills"
}
```

## Usage Examples

### Fetching Projects (JavaScript)
```javascript
fetch('/api/projects')
  .then(response => response.json())
  .then(projects => {
    // Process projects data
    console.log(projects);
  })
  .catch(error => {
    console.error('Error fetching projects:', error);
  });
```

### Submitting Contact Form (JavaScript)
```javascript
const formData = {
  name: 'John Doe',
  email: 'john@example.com',
  subject: 'Project Inquiry',
  message: 'I would like to discuss a project...'
};

fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
  .then(response => response.json())
  .then(result => {
    if (result.success) {
      alert(result.message);
    } else {
      alert('Error: ' + result.message);
    }
  })
  .catch(error => {
    console.error('Error submitting form:', error);
    alert('There was an error sending your message.');
  });
```

## Rate Limiting

To prevent abuse, the API implements rate limiting:
- 100 requests per hour per IP address
- Exceeding this limit will result in a 429 (Too Many Requests) response

## Error Handling

All API responses follow standard HTTP status codes:
- 2xx: Success
- 4xx: Client errors
- 5xx: Server errors

Error responses include a JSON object with an error message:
```json
{
  "error": "Description of the error"
}
```

## Versioning

This API is currently at version 1. Future updates will be versioned appropriately.