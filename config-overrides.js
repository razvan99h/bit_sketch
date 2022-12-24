module.exports = (config) => {
  config.module.rules[1].oneOf[6].use[1].options.modules = {
    localIdentName: '[name]_[local]_[hash:base64:5]',
      exportLocalsConvention: 'camelCase'
  }
  return config;
}
