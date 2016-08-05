global.expect = require('expect');

const babel = require('babel-core');
const jsdom = require('jsdom');
const path = require('path');

before(function(done) {
  const js = path.resolve(__dirname, '..', 'index.js');
  const babelResult = babel.transformFileSync(js, {
    presets: ['es2015']
  });


  const html = path.resolve(__dirname, '..', 'index.html')

  jsdom.env(html, [], {src: babelResult.code}, (err, window) => {
    global.window = window


    return done(err);
  });
});
