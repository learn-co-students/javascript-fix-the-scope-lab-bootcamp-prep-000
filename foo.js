var makeChubChub = function(options) {
  var height = options['height'];
  return {
    jump: function() {
      return 'Chub Chub has jumped!'
    },
    getHeight: function() {
      return 'Chub Chub is this tall: ' + height
    },
    squish: function() {
      return 'Chub Chub says Squee'
    }
  }
}

myChubChub = makeChubChub({height: '5'});
myShortChubChub = makeChubChub({height: '1'});
myShortChubChub.getHeight();
myChubChub.getHeight();

myChubChub.jump()

myChubChub.squish()
