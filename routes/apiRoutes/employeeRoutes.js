const express = require('express');
const router = express.Router();
const db = require('../../db/connection');




  // get all employee
  app.get('/api/employee', (req, res) => {
    const sql = `SELECT 
    e.first_name, e.last_name, 
    r.title, r.salary, 
    m.first_name as manager_first_name, m.last_name as manager_last_name, m.id,
    d.name as department_name
    FROM employee as e 
    LEFT JOIN role as r ON e.role_id = r.id 
    LEFT JOIN department as d ON r.department_id = d.id
    LEFT JOIN employee as m ON e.manager_id = m.id; 
    `;
  
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

  // Get a single employee
app.get('/api/employee/:id', (req, res) => {
    const sql = `SELECT 
    e.first_name, e.last_name, 
    r.title, r.salary, 
    m.first_name as manager_first_name, m.last_name as manager_last_name, m.id,
    d.name as department_name
    FROM employee as e 
    LEFT JOIN role as r ON e.role_id = r.id 
    LEFT JOIN department as d ON r.department_id = d.id
    LEFT JOIN employee as m ON e.manager_id = m.id; 
    WHERE employee.id = ?`;
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
  app.post('/api/employee', ({ body }, res) => {
    const errors = inputCheck(
        body, 
        'first_name', 
        'last_name', 
        'role_id'
        );
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }

  const sql = `INSERT INTO employee (first_name, last_name, role_id)
  VALUES (?,?,?)`;
const params = [body.first_name, body.last_name, body.role_id];

db.query(sql, params, (err, result) => {
  if (err) {
    res.status(400).json({ error: err.message });
    return;
  }
  res.json({
    message: 'success',
    data: body
  });
});
});