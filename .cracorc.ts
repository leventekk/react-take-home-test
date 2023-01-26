import { resolve } from 'node:path'

const config = {
  webpack: {
    alias: {
      '@test': resolve(__dirname, 'src/test'),
      '@common': resolve(__dirname, 'src/modules/common'),
      '@ballot': resolve(__dirname, 'src/modules/ballot')
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '@test/(.*)': '<rootDir>/src/test/$1',
        '@ballot/(.*)': '<rootDir>/src/modules/ballot/$1',
        '@common/(.*)': '<rootDir>/src/modules/common/$1'
      }
    }
  }
}

export default config
