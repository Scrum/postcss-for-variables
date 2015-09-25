var postcss = require('postcss');
var balanced = require('balanced-match');

var VAR_FUNC_IDENTIFIER = 'var';

function resolveValue(value, map) {
    var start = value.indexOf(VAR_FUNC_IDENTIFIER + "(")
    if (start === -1) {
      return [value]
    }

  var nv = '';

  value.match(/var\(\S*\)/g).map(function(v){

    var matches = balanced("(", ")", v)
    var reg = new RegExp(VAR_FUNC_IDENTIFIER+'.\('+matches.body+'.\)', 'g')
    var newValue = map[matches.body];

    nv = value.replace(reg, newValue)
  })

    return nv

}

module.exports = postcss.plugin('postcss-for-variables', function(options) {
    options = options || {};

    return function (css) {

        var map = {};

        css.walkRules(function(rule){
            if (rule.selectors[0] !== ':root') {
                return;
            }

            rule.each(function(decl){
                var prop = decl.prop,
                    value = decl.value;
                map[prop] = value;
            });
        });

        css.walkAtRules('for', function(rules){
            var clone = rules.cloneBefore(),
                resolvedValue = resolveValue(clone.params, map);
            clone.params = resolvedValue;

            rules.remove();
        });

    };
});
