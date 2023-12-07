const express = require('express');
const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

function createTableIfNotExists() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS people (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )`;

  connection.query(createTableQuery, (error) => {
    if (error) {
      console.error('Error creating table:', error.message);
    } else {
      console.log('Table created or already exists');
    }
  });
}

createTableIfNotExists();

app.get('/', (req, res) => {

  const insertQuery = `INSERT INTO people(name) VALUES('NovoRegistro')`;
  connection.query(insertQuery, (insertError) => {
    if (insertError) {
      console.error('Error inserting data:', insertError.message);
      res.status(500).send('Internal Server Error');
    } else {

      const selectQuery = 'SELECT * FROM people';

      connection.query(selectQuery, (error, results) => {
        if (error) {
          console.error('Error fetching data:', error.message);
          res.status(500).send('Internal Server Error');
        } else {

          const peopleList = results.map((person) => `<li>${person.name}</li>`).join('');

          res.send(`<h1>Full Cycle 2</h1><ul>${peopleList}</ul>`);
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log('Rodando na porta ' + port);
});
