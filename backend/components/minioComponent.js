const multer  = require('multer')
const Minio = require('minio');

//minio
const minioClient = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: 'minioadmin',
    secretKey: 'minioadmin',
});

//multer

const storage= multer.memoryStorage()

const upload = multer({storage: storage})

module.exports = {minioClient,upload}