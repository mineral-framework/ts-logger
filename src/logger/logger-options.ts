import { Transport } from '../transport'

export type Level = 'debug' | 'info' | 'warning' | 'error'

export interface LoggerOptions {
    level: Level,
    transports: Transport[]
}
