module.exports = {
  presets: [
    ['@babel/preset-env', { 'loose': true }], // Set the loose option
    '@babel/preset-react',
    'module:metro-react-native-babel-preset'
  ],
  plugins: [
    // Add these plugins with the loose option if they are not part of the presets already
    ['@babel/plugin-transform-class-properties', { 'loose': true }],
    ['@babel/plugin-transform-private-methods', { 'loose': true }],
    ['@babel/plugin-transform-private-property-in-object', { 'loose': true }]
  ]
};
