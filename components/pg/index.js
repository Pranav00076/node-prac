/////////////   pool     /////////////////

const { Pool } = require('pg');
const express = require('express')

const app = express()
app.use(express.json())

const pool = new Pool({
    user: 'pthawait',
    password: 'postgres123',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
});

app.get('/users', async (req,res) => {
try {
        const result = await pool.query("SELECT * FROM users");
        res.json(result.rows)
        console.log(result.rows);
    } catch (error) {
        console.error(error);
    } finally {
        await pool.end();
    }
})

app.listen(8080, () => {
  console.log("Server at 8080")
})