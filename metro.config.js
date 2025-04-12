const { getDefaultConfig } = require('@react-native/metro-config');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  
  // Add workspace paths
  watchFolders: [
    path.resolve(__dirname),
  ],

  resolver: {
    ...defaultConfig.resolver,
    assetExts: [
      ...defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
    ],
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  },

  transformer: {
    ...defaultConfig.transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
};