const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './storage/pdfs')
    },
    
    filename: function (req, file, cb){
        cb(null, `${file.fieldname}-${Date.now()}.pdf`)
    }
})

const upload = multer({ storage }) 


module.exports = upload