const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js', // Punto de entrada de tu aplicación
    output: {
        filename: 'bundle.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Regex para identificar archivos CSS
                use: ['style-loader', 'css-loader'], // Loaders para procesar archivos
            },
            {
                test: /\.js$/, // Regex para identificar archivos JS
                exclude: /node-modules/, // Excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', // Loader para transpilar JS moderno a JS compatible con más navegadores
                    options: {
                        presets: ['@babel/preset-env'], // Preset de Babel para convertir JS moderno a versiones mas antiguas
                    }
                }
            }
        ]
    },
    devtool: 'source-map', // Generar source maps para facilitar la depuración
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true, // Habilitando compresión gzip
        port: 9000, // Puerto del servidor de desarrollo
    }
}