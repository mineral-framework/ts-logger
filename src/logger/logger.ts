import { createLogger as createWinston, Logger as Winston, format } from 'winston'

import { LoggerOptions } from './logger-options'
import { createTransport } from '../transport'

class LoggerImpl implements Logger {

    private _logger: Winston

    constructor(options: LoggerOptions, clazz: string) {
        
        this._logger = createWinston({
            level: options.level,
            format: format.json(),
            defaultMeta: {
                'Class': clazz
            }
        })

        options.transports
            .forEach((transport) => this._logger.add(createTransport(transport, clazz)))
    }


    debug(message: string, meta?: Object) {
        this._logger.debug(message, meta)
    }

    info(message: string, meta?: Object) {
        this._logger.info(message, meta)
    }

    warning(message: string, meta?: Object) {
        this._logger.warning(message, meta)
    }

    error(message: string | Error, meta?: Object) {
        let data = {
            ...meta
        }

        if (message instanceof Error) {
            data = {
                ...meta,
                ...message
            }
        }

        this._logger.error(message instanceof Error ? message.message : message, data)
    }

}

export const createLogger = (options: LoggerOptions, clazz: string): Logger => {
    return new LoggerImpl(options, clazz)
}

export interface Logger {
    debug(message: string, data?: Object): void
    info(message: string, data?: Object): void
    warning(message: string, data?: Object): void
    error(message: string | Error, data?: Object): void
}