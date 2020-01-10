import { createLogger as createWinston, format, Logger as Winston } from 'winston'

import { createTransport } from '../transport'
import { LoggerOptions } from './logger-options'

class LoggerImpl implements Logger {

    private logger: Winston

    constructor(options: LoggerOptions, clazz: string) {

        this.logger = createWinston({
            defaultMeta: {
                Class: clazz,
            },
            format: format.json(),
            level: options.level,
        })

        options.transports
            .forEach((transport) => this.logger.add(createTransport(transport, clazz)))
    }

    public debug(message: string, meta: object = {}) {
        this.logger.debug(message, meta)
    }

    public info(message: string, meta: object = {}) {
        this.logger.info(message, meta)
    }

    public warning(message: string, meta: object = {}) {
        this.logger.warning(message, meta)
    }

    public error(message: string, error?: Error, meta: object = {}) {
        this.logger.error(message, {
            error,
            meta,
        })
    }

}

export const createLogger = (options: LoggerOptions, clazz: string): Logger => {
    return new LoggerImpl(options, clazz)
}

export interface Logger {
    debug(message: string, data?: object): void
    info(message: string, data?: object): void
    warning(message: string, data?: object): void
    error(message: string | Error, data?: object): void
}
