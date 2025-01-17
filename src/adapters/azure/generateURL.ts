import path from 'path'
import type { GenerateURL } from '../../types'

interface Args {
  containerName: string
  baseURL: string
}

export const getGenerateURL =
  ({ containerName, baseURL }: Args): GenerateURL =>
  ({ filename, prefix = '' }) => {
    if (filename) {
      return `${baseURL}/${containerName}/${path.posix.join(prefix, filename)}`
    }
    return null
  }
