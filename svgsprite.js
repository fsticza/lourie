const svgstore = require('svgstore')
const fs = require('fs')

const sprites = svgstore()
    .add('logo', fs.readFileSync('./src/assets/img/svg/logo.svg', 'utf8'))
    .add('logo-l', fs.readFileSync('./src/assets/img/svg/logo-l.svg', 'utf8'))
    .add('bird', fs.readFileSync('./src/assets/img/svg/bird.svg', 'utf8'))
    .add('scroll', fs.readFileSync('./src/assets/img/svg/scroll.svg', 'utf8'))

fs.writeFileSync('./src/assets/img/svg/sprite.svg', sprites)

process.exit(0)
