const sqlite3 = require('sqlite3').verbose()
const banco_ws = new sqlite3.Database('./ws.db')

// +- CRIANDO A TABELA
banco_ws.serialize(function () {
    banco_ws.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)

    // const query = `
    // INSERT INTO ideas(
    //     image, 
    //     title,
    //     category,
    //     description, 
    //     link
    // ) VALUES (?,?,?,?,?);
    // `
    // const values = [
    //     "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    //     "Cursos de Programação",
    //     "Estudo",
    //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quibusdam dignissimos quod eum",
    //     "https://rocketseat.com.br/week/aulas/11.0"
    // ]

    // // +- INSERINDO DADOS NA TABELA
    // banco_ws.run(query, values, function (err) {
    //     if (err) return console.log(err)

    //     console.log(this)
    // })

    // +- DELETAR REGISTRO DE UMA TABELA
    // banco_ws.run(`DELETE FROM ideas WHERE id = ?`, [3], function (err) {
    //     if (err) return console.log(err)

    //     console.log("DELET CONCLUÍDO COM SUCESSO !", this)
    // })

    // +- CONSULTANDO DADOS NA TABELA
    // banco_ws.all(`SELECT * FROM ideas`, function (err, rows) {
    //     if (err) return console.log(err)

    //     console.log(rows)
    // })
})

module.exports = banco_ws