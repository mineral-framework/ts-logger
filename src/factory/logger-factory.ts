import { createLogger, Logger, LoggerOptions } from '../logger'

export class LoggerFactory {

    public static getGlobal(clazz: string): Logger {
        const instance: LoggerFactory | undefined = LoggerFactory.INSTANCE

        if (!instance) {
            throw new Error('LoggerFactory is not setup')
        }

        if (!instance.loggers.has(clazz)) {
            instance.loggers.set(clazz, createLogger(instance.options, clazz))
        }

        return instance.loggers.get(clazz)
    }

    public static setup(options: LoggerOptions) {
        LoggerFactory.INSTANCE = new LoggerFactory(options)
    }

    private static INSTANCE: LoggerFactory

    private loggers: Map<string, Logger>

    private options: LoggerOptions

    private constructor(options: LoggerOptions) {
        this.options = options
        this.loggers = new Map()
    }

}
