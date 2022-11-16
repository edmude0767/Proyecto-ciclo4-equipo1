const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cd){
        cb(null, '../storage/pdfs')
    },
    filename: function (req, file, cd){
        cb(null, `${file.fieldname}-${Date.now()}.pdf`)
    }
})

const upload = multer({storage})

module.exports = upload