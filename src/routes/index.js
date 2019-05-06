const express = require("express")

const router = express.Router();

const mysqlConnection = require('../database');

// routes
router.get('/', (req, res) => {
    res.json({ "titulo": "Hello world" });
});
//Clients
router.get('/users', (req, res) => {
    mysqlConnection.query('SELECT * FROM user', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});

router.put('/update_client/:id', (req, res) => {
    const { name, lastname, motherlastname, rfc } = req.body;
    const { id } = req.params;
    const query = `
    CALL addOrEditUser(?,?,?,?,?);
    `;
    mysqlConnection.query(query, [id, name, lastname, motherlastname, rfc], (err, rows, fields) => {
        if (!err) {
            res.json({ result: true, message: 'Cliente actualizado correctamente' })
        } else {
            res.json({ result: false, message: 'Error al actualizar el cliente' })
            console.log("Error->", err)
        }
    })
})

router.post('/create_client', (req, res) => {
    const { id, name, lastname, motherlastname, rfc } = req.body;
    const query = `
    CALL addOrEditUser(?,?,?,?,?);
    `;
    mysqlConnection.query(query, [id, name, lastname, motherlastname, rfc], (err, rows, fields) => {
        if (!err) {
            res.json({ result: true, message: 'Cliente agregado correctamente' })
        } else {
            res.json({ result: false, message: 'Error al agregar el cliente' })
            console.log("Error->", err)
        }
    })
})
//Articles
router.get('/articles', (req, res) => {
    mysqlConnection.query('SELECT * FROM articles', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log(rows);
        } else {
            console.log(err);
        }
    })
});

router.put('/update_article/:id', (req, res) => {
    const { description, model, stock, price } = req.body;
    const { id } = req.params;
    const query = `
    CALL addOrEditArticle(?,?,?,?,?);
    `;
    mysqlConnection.query(query, [id, description, model, stock, price], (err, rows, fields) => {
        if (!err) {
            res.json({ result: true, message: 'Articulo actualizado correctamente' })
        } else {
            res.json({ result: false, message: 'Error al actualizar el articulo' })
            console.log("Error->", err)
        }
    })
})

router.post('/create_article', (req, res) => {
    const { id, description, model, stock, price } = req.body;
    const query = `
    CALL addOrEditArticle(?,?,?,?,?);
    `;
    mysqlConnection.query(query, [id, description, model, stock, price], (err, rows, fields) => {
        if (!err) {
            res.json({ result: true, message: 'Articulo agregado correctamente' })
        } else {
            res.json({ result: false, message: 'Error al agregar el articulo' })
            console.log("Error->", err)
        }
    })
})

//insert into articles (description,model,stock, price)
//values (_description,_model,_stock,_price);

//SALES
router.post('/create_sale', (req, res) => {
    const { total, fecha, clientid } = req.body;
    const query = `INSERT INTO sales (total,fecha,status,clientid)
    VALUES (${total},CURDATE(),1,${clientid})
    `;
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json({ result: true, message: 'Venta guardada correctamente' })
        } else {
            res.json({ result: false, message: 'Error al guardar la venta' })
            console.log("Error->", err)
        }
    })
}),
    router.get('/sales', (req, res) => {
        var options = {sql: 'SELECT * FROM sales sale inner join user user on sale.clientid  = user.id', nestTables: true};
        mysqlConnection.query(options, (err, rows, fields) => {
            if (!err) {
                res.json(rows)
                console.log(rows)
            } else {
                console.log(err);
            }
        })

    });


module.exports = router;

//EXPRESS VALIDATION