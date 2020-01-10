import { transports } from 'winston'
import { FileTransportInstance } from 'winston/lib/winston/transports'

import { TransportOptions } from './transport-options'

export interface FileTransport extends TransportOptions {
    readonly type: 'file'
    readonly filename: string
}

export const createFileTransport = (transport: FileTransport, clazz: string): FileTransportInstance => {
    return new transports.File({
        filename: transport.filename,
        level: transport.level,
    })
}
