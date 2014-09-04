module.exports = function (pluginRegistry) {
    var pkg = require('json!./../../package.json');

    var plugins = Object.keys(pkg.dependencies).filter(function (packageName) {
        return packageName.match(new RegExp(pkg.name + '-plugin-'));
    });

    plugins.forEach(function (plugin) {
        require('./../../node_modules/' + plugin + '/browser/scripts/main')(pluginRegistry);
        require('!style!css!less!./../../node_modules/' + plugin + '/browser/styles/main.less');
    });
}
