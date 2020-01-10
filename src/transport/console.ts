import { format, transports } from 'winston'
import { ConsoleTransportInstance } from 'winston/lib/winston/transports'

import { TransportOptions } from './transport-options'

export interface ConsoleTransport extends TransportOptions {
    readonly type: 'console'
}

export const createConsoleTransport = (transport: ConsoleTransport, clazz: string): ConsoleTransportInstance => {
    return new transports.Console({
        format: format.simple(),
        level: transport.level,
    })
}
