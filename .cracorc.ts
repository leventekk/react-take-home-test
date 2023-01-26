import { resolve } from 'node:path'

const config = {
  webpack: {
    alias: {
      '@common': resolve(__dirname, 'src/modules/common'),
      '@ballot': resolve(__dirname, 'src/modules/ballot')
    }
  }
}

export default config
