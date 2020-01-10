import * as Graylog2Transport from 'winston-graylog2'

import { TransportOptions } from './transport-options'

export interface GraylogServer {
    host: string
    port: number
}

export interface GraylogTransport extends TransportOptions {
    readonly type: 'graylog'
    servers: GraylogServer[]
    hostname: string,
    facility?: string
}

export const createGraylogTransport = (transport: GraylogTransport, clazz: string): Graylog2Transport => {
    return new Graylog2Transport({
        graylog: {
            servers: transport.servers,
            hostname: transport.hostname,
            facility: transport.facility || process.env.NODE_FACILITY || process.env.NODE_ENV || 'Nodejs'
        },
        staticMeta: {
            'Class': clazz       
        },
        level: transport.level
    })
}