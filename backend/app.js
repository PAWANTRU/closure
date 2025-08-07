const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend files from "frontend" directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Sample backend API
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from backend!' });
});

// Catch-all route to serve index.html for frontend routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
