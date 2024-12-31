const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dummy data untuk rekomendasi makanan
const recommendations = [
    { name: 'Salad', calories: 150 },
    { name: 'Pizza', calories: 300 },
    { name: 'Sushi', calories: 250 },
];

// Endpoint untuk mendapatkan rekomendasi makanan
app.get('/api/recommendations', (req, res) => {
    res.json(recommendations);
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});