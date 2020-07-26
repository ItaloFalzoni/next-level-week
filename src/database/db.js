const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")


module.exports = db

// db.serialize(() => {
//   db.run(`
//     create table if not exists places (
//       id integer primary key autoincrement,
//       image text,
//       name text,
//       address text,
//       address2 text,
//       state text,
//       city text,
//       items text
//     );
//   `)

//   const query = `
//     insert into places (
//       image,
//       name,
//       address,
//       address2,
//       state,
//       city,
//       items
//     ) values (?,?,?,?,?,?,?)
//   `

//   const values = [
//     "https://images.unsplash.com/photo-1542739674-b449a8938b59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     "Papersider",
//     "Guilherme Gemballa, Jardim América",
//     "Número 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Papéis e Papelão"
//   ]

//   function afterInsertData(err) {
//     if (err) {
//       return console.log(err)
//     }
//     console.log("Cadastrado com sucesso")
//     console.log(this)
//   }

//   // db.run(query, values, afterInsertData)


  // db.run(`delete from places where id = ?`, [4], function(err) {
  //   if (err) {
  //     return console.log(err)
  //   }

  //   console.log("Registro deletado com sucesso")
  // })

//   // db.all(`select name from places`, function(err, rows) {
//   //   if (err) {
//   //     return console.log(err)
//   //   }

//   //   console.log("Aqui estão seus registros")
//   //   console.log(rows)
//   // })
// })
