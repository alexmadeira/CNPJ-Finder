module.exports = {
  presets: ['next/babel'],
  plugins: [
    'inline-react-svg',
    ['styled-components', { ssr: true }],
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: './src',
        rootPathPrefix: '~/'
      }
    ]
  ]
}
