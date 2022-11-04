const path = require("path")


module.exports = {

     html: (req , res) => {
         res.sendFile(path.join(__dirname, "../public/index.html"))
     },

     styles: (req, res) => {
         res.sendFile(path.join(__dirname, "../public/index.css"))
     },

     js: (req,res) => {
         res.sendFile(path.join(__dirname, "../public/index.js"))
     }
 }