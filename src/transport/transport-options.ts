import { Level } from '../logger'

export type TransportType = 'graylog' | 'console' | 'file'

export interface TransportOptions {
    readonly type: TransportType
    readonly level?: Level
}
