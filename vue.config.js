module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/poco-vue-composition-api/' : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Composition Api - VueJs'
    }
  }
}
