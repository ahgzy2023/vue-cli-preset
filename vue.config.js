const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');
const path = require('path');
const { development } = require('./src/dot-env.js');
const { production } = require('./src/dot-env.js');

function resolve(dir) {
  return path.join(__dirname, dir);
}
const PORT = process.env.port;
const proxyUrl = process.env.PRESET_APP_PROXY_URL
const env = process.env.NODE_ENV;
const baseUrl = process.env.PRESET_APP_PUBLIC_PATH
const srcDir = path.resolve(process.cwd(), 'src');
module.exports = defineConfig({
  publicPath: baseUrl,
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    allowedHosts: 'all',
    port: PORT,
    compress: true,
    open: false,
    server: 'http',
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    client: {
      progress: true,
    },
    proxy: {
      '/api': {
        target: proxyUrl,
        ws: true,
        changeOrigin: true,
        // pathRewrite: {
        //   '^\/api': '',
        // },
      },
    },
  },
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: {
    output: {
      environment: {
        arrowFunction: false,
        destructuring: false,
        bigIntLiteral: false,
        const: false,
        templateLiteral: false,
        optionalChaining: false,
      },
      path: path.resolve(process.cwd(), 'dist'),
    },
    target: ['es5', 'web'],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'src'),
      },
      extensions: ['.js', '.ts', 'vue', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
          type: 'asset/resource',
          exclude: /[\\/]fonts[\\/]/,
          generator: {
            filename: 'images/[name].[hash:8][ext][query]',
          },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
          type: 'asset/resource',
          exclude: /[\\/](images?|imgs?)[\\/]/,
          generator: {
            filename: 'fonts/[name].[hash:8][ext][query]',
          },
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          type: 'asset/resource',
          generator: {
            filename: 'meidas/[name].[hash:8][ext][query]',
          },
        },
      ],
    },
    stats: {
      assets: false,
      modules: false,
    },
    cache: {
      type: 'filesystem',
      cacheDirectory: path.resolve(process.cwd(), './node_modules/.cache'),
    },
  },
  chainWebpack: (config) => {
    config.module.rule('svg')
    .exclude
    .add(resolve('src/icons/svg'))
    .end();

    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      });
    if (env === 'development') {
      config.plugin('define').tap((args) => [
        {
          'process.env': {
            ...development.browser,
          },
        },
      ]);
    } else {
      config.plugin('define').tap((args) => [
        {
          'process.env': {
            ...production.browser,
          },
        },
      ]);
    }
  },
  css: {
    loaderOptions: {
      sass: {
        // additionalData: `@import "@/style/index.scss"`
      },
    },
    extract: {
      ignoreOrder: true,
    },
  },
});
