const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

    // Load environment variables
    dotenv.config();

    const app = express();
    const PORT = process.env.PORT || 5000;

    // Middleware
    app.use(cors());
    app.use(bodyParser.json());

    // Routes
    app.get('/', (req, res) => {
        res.send('Server is running...');
    });

    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });