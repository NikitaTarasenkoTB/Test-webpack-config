module.exports = {
  plagins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default'
    })
  ]
}