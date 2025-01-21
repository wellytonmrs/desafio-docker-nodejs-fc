const express = require('express');
const faker = require('faker');
const app = express();
const port = process.env.APP_PORT || 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};

const mysql = require('mysql');

const connection = mysql.createConnection(config);

app.get('/', (req, res) => {
  const name = faker.name.findName();
  const sql = `INSERT INTO people (name) VALUES ('${name}')`;
  console.log("sql: ", sql);
  
  connection.query(sql, [name], (err) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    connection.query('SELECT name FROM people', (error, results) => {
      if (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
        return;
      }

      res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ol>
          ${results?.length ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
        </ol>
      `);
    });
  });
});

app.listen(port, () => {
  console.log('Up on:', port);
});
