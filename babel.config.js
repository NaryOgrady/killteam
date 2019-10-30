module.exports = {
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ],
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: [
            'last 2 versions',
            'not ie <= 11'
          ]
        },
        loose: true,
        useBuiltIns: 'usage'
      }
    ]
  ]
};
