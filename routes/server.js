const express = require('express');
const mysql = require('mysql2');
const apiRoutes = require('./apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use('/api', apiRoutes);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

  
  app.get('/api/role', (req, res) => {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });


  app.get('/api/role/:id', (req, res) => {
    const sql = `SELECT * FROM role WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: row
      });
    });
  });


  app.put('/api/employee/:id', (req, res) => {
    const errors = inputCheck(req.body, 'role_id');

if (errors) {
  res.status(400).json({ error: errors });
  return;
}
    const sql = `UPDATE employee SET role_id = ? 
                 WHERE id = ?`;
    const params = [req.body.party_id, req.params.id];
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        // check if a record was found
      } else if (!result.affectedRows) {
        res.json({
          message: 'Employee not found'
        });
      } else {
        res.json({
          message: 'success',
          data: req.body,
          changes: result.affectedRows
        });
      }
    });
  });

app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });