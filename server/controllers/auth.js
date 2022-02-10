const bcrypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body

      for (let i = 0; i < users.length; i++) {

        const existing = bcrypt.compareSync(password, users[i].passHash)

        if (users[i].username === username && existing) {

          const userCopy = {...users[i]}
          delete userCopy.passHash

          res.status(200).send(userCopy)
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)

        let salt = bcrypt.genSaltSync(5)
        let passHash = bcrypt.hashSync(req.body.password, salt)
        
        let newBod = {
          username : req.body.username,
          email : req.body.email,
          firstName : req.body.firstName,
          lastName : req.body.lastName,
          passHash : passHash
        }

        users.push(newBod)
        console.log(users);
        res.status(200).send(newBod)
    }
}