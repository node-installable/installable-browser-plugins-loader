module.exports = function (pluginManager) {
    var pkg = require('json!./../../package.json');

    var plugins = Object.keys(pkg.dependencies).filter(function (packageName) {
        return packageName.match(new RegExp(pkg.name + '-plugin-'));
    });

    plugins.forEach(function (plugin) {
        require('./../' + plugin + '/client/src/main.js')(pluginManager);
    });
}
