module.exports = function (cssPlugin, ROOT, isProd) {
    const babel = {
        test: /\.js$/,
        use: [
            'babel-loader',
            'ng-annotate-loader'
        ],
        exclude: /node_modules/
    };
    const scss = {
        test: /\.s?css$/,
        use: cssPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader?sourceMap', 'resolve-url-loader', 'sass-loader?sourceMap']
        })
    };
    const inline_scss = {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader?sourceMap', 'resolve-url-loader', 'sass-loader?sourceMap']
    };
    const angular = {
        test:  /\/angular(.min)?\.js$/,
        use: [
            'exports-loader?angular'
        ]
    };
    const angularModules = {
        test: /\/angular(.min)?\.js$/,
        use: [
            'remove-angular-modules-loader?moduleName=av-web'
        ]
    };
    const auth0 = {
        test: /node_modules[\\\/]auth0-lock[\\\/].*\.js$/,
        use: [
            'transform-loader/cacheable?brfs',
            'transform-loader/cacheable?packageify'
        ]
    };
    const auth0_2 = {
        test: /node_modules[\\\/]auth0-lock[\\\/].*\.ejs$/,
        use: ['transform-loader/cacheable?ejsify']
    };

    const common = [babel, angularModules, auth0, auth0_2];
    const dev = [inline_scss];
    const prod = [scss];

    return isProd ?
        [...common, ...prod] :
        [...common, ...dev];
}