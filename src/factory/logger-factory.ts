import { Logger, LoggerOptions, createLogger } from '../logger'

export class LoggerFactory {

    private _loggers: Map<string, Logger>

    private static INSTANCE: LoggerFactory

    private options: LoggerOptions

    private constructor(options: LoggerOptions) {
        this.options = options
        this._loggers = new Map()
    }

    static getGlobal(clazz: string): Logger {
        const instance: LoggerFactory | undefined = LoggerFactory.INSTANCE

        if (!instance) {
            throw new Error('LoggerFactory is not setup')
        }

        if (!instance._loggers.has(clazz)) {
            instance._loggers.set(clazz, createLogger(instance.options, clazz))
        }

        return instance._loggers.get(clazz)
    }

    static setup(options: LoggerOptions) {
        LoggerFactory.INSTANCE = new LoggerFactory(options)
    }

}
