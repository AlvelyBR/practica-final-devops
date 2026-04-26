const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Hola Mundo DevOps</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #0a0a0a, #1a001f);
          font-family: Arial, sans-serif;
          color: white;
        }

        .container {
          text-align: center;
          padding: 40px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 20px rgba(128, 0, 128, 0.5);
        }

        h1 {
          font-size: 3rem;
          color: #c77dff;
          margin-bottom: 10px;
        }

        p {
          font-size: 1.2rem;
          color: #ddd;
        }

        .badge {
          margin-top: 15px;
          display: inline-block;
          padding: 8px 15px;
          border-radius: 20px;
          background: #7209b7;
          color: white;
          font-size: 0.9rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hola Mundo 🚀</h1>
        <p>Mi primera app con DevOps</p>
        <div class="badge">CI/CD con GitHub Actions</div>
      </div>
    </body>
    </html>
  `);
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
  });
}