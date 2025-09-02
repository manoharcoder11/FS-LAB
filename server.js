const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '.')));


app.post('/register', (req, res) => {
    const formData = req.body;

    console.log('📝 Received student registration data:');
    for (const key in formData) {
        console.log(`  - ${key}: ${formData[key]}`);
    }

    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Success</title>
            <style>
                body { background-image: url('img.jpg'); font-family: Arial, sans-serif; background-color: #e9f5e9; text-align: center; padding-top: 50px; }
                .success-container { background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb; padding: 20px; border-radius: 5px; max-width: 500px; margin: auto; }
                h1 { color: #155724; }
            </style>
        </head>
        <body>
            <div class="success-container">
                <h1>Registration Successful!</h1>
                <p>Your data has been received and processed by the server.</p>
            </div>
        </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
});
