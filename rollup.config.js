import commonjs from '@rollup/plugin-commonjs'

export default [
  {
    input: './node_modules/lodash.get/index.js',
    output: {
      file: 'src/dig.js',
      format: 'iife',
      name: 'dig'
    },
    plugins: [
      commonjs()
    ]
  }
]
