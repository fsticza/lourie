const imagemin = require('imagemin')
const imageminJpegtran = require('imagemin-jpegtran')
const imageminPngquant = require('imagemin-pngquant')

imagemin(['src/assets/img/*.{jpg,png}'], 'src/assets/img', {
    plugins: [
        imageminJpegtran(),
        imageminPngquant({quality: '65-80'})
    ]
}).then(files => {
    console.log(!!module.parent)
    process.exit(0)
})
