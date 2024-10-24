const express = require('express');
const mysql = require('mysql');
const app = express();

// Middleware para procesar datos en formato JSON
app.use(express.json());

// Configurar la conexión a la base de datos MySQL de XAMPP
const db = mysql.createConnection({
  host: 'localhost',       // XAMPP ejecuta MySQL localmente
  user: 'root',            // Usuario por defecto de XAMPP (cámbialo si has cambiado las credenciales)
  password: '',            // Generalmente no hay contraseña por defecto (cámbialo si es necesario)
  database: 'DatosBancarios' // Cambia esto al nombre de tu base de datos
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar con la base de Datos:', err);
    return;
  }
  console.log('Conexion exitosa ');
});

// Ruta para guardar datos en la base de datos
app.post('/add', (req, res) => {
  const { nombre, edad } = req.body;

  const query = 'INSERT INTO DatosClientes (Nombres, Apellidos, CURP, NumeroTelefono, Email, Pass, Saldo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [nombre, edad], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error al insertar los datos' });
    }
    res.status(200).json({ message: 'Data insertador', id: result.insertId });
  });
});

// Configurar el servidor para escuchar en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server ejecutado en el puerto: ${PORT}`);
});