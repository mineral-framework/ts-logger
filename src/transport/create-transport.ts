import * as WinstonTransport from 'winston-transport'

import { Transport } from './transport'
import { createGraylogTransport } from './graylog'
import { createConsoleTransport } from './console'
import { createFileTransport } from './file'

export const createTransport = (transport: Transport, clazz: string): WinstonTransport => {
    switch (transport.type) {
        case 'console':
            return createConsoleTransport(transport, clazz)
        case 'graylog':
            return createGraylogTransport(transport, clazz)
        case 'file':
            return createFileTransport(transport, clazz)
    }
}
