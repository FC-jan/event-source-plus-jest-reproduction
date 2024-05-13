module.exports = (api) => {
    const isTest = true;// api.env('test');

    api.cache(true);

    // missing:
    // { includeNodeModules: ['informed', 'react-intl', 'intl-messageformat', 'intl-messageformat-parser'] }

    const targets = {};
    let plugins = [];
    let modules = 'auto';

    if (isTest) {
      targets.node = 'current';
    } else {
      modules = false;
      plugins = [
        '@babel/plugin-syntax-dynamic-import',
        ['@babel/plugin-transform-runtime', { regenerator: true }],
        '@babel/plugin-proposal-optional-chaining',
      ];
    }

    return {
      sourceType: 'unambiguous',
      presets: [
        ['@babel/preset-env', {
          useBuiltIns: 'usage',
          corejs: 3,
          targets,
          modules,
        }],
        '@babel/react',
        '@babel/preset-typescript',
      ],
      plugins,
    };
  };
