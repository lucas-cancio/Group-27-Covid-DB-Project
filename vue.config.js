module.exports = {
  pages: {
    'index': {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'about': {
      entry: './src/pages/About/main.js',
      template: 'public/index.html',
      title: 'About',
      chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
    },
    'query1': {
      entry: './src/pages/Query1/main.js',
      template: 'public/index.html',
      title: 'Query1',
      chunks: [ 'chunk-vendors', 'chunk-common', 'query1' ]
    },
    'query2': {
      entry: './src/pages/Query2/main.js',
      template: 'public/index.html',
      title: 'Query2',
      chunks: [ 'chunk-vendors', 'chunk-common', 'query2' ]
    },
    'query3': {
      entry: './src/pages/Query3/main.js',
      template: 'public/index.html',
      title: 'Query3',
      chunks: [ 'chunk-vendors', 'chunk-common', 'query3' ]
    },
    'query4': {
      entry: './src/pages/Query4/main.js',
      template: 'public/index.html',
      title: 'Query4',
      chunks: [ 'chunk-vendors', 'chunk-common', 'query4' ]
    },
    'query5': {
      entry: './src/pages/Query5/main.js',
      template: 'public/index.html',
      title: 'Query5',
      chunks: [ 'chunk-vendors', 'chunk-common', 'query5' ]
    },
    'query6': {
      entry: './src/pages/Query6/main.js',
      template: 'public/index.html',
      title: 'Query6',
      chunks: [ 'chunk-vendors', 'chunk-common', 'query6' ]
    },
    'queryEx': {
      entry: './src/pages/QueryEx/main.js',
      template: 'public/index.html',
      title: 'QueryEx',
      chunks: [ 'chunk-vendors', 'chunk-common', 'queryEx' ]
    }
  }
}
