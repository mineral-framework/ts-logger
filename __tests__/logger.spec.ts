import * as winston from 'winston'
import { createLogger, Logger } from '../src/logger'

describe('createLogger', () => {

    let mockCreateLogger
    let mockLogger

    let logger: Logger

    let clazz

    beforeEach(() => {
        mockLogger = {
            debug: jest.fn(),
            info: jest.fn(),
            warning: jest.fn(),
            error: jest.fn()
        }

        mockCreateLogger = jest.spyOn(winston, 'createLogger').mockReturnValue(mockLogger)

        clazz = 'class'

        logger = createLogger({
            level: 'debug',
            transports: []
        }, clazz)

    })

    it('Should create logger', () => {
        expect(logger).toBeDefined()
        expect(mockCreateLogger).toHaveBeenCalled();
    })

    it('Should call debug on winston', () => {
        const message = 'DEBUG'
        logger.debug(message)
        expect(mockLogger.debug).toHaveBeenCalledWith(message, {})
    })

    it('Should call info on winston', () => {
        const message = 'INFO'
        logger.info(message)
        expect(mockLogger.info).toHaveBeenCalledWith(message, {})
    })

    it('Should call warning on winston', () => {
        const message = 'WARNING'
        logger.warning(message)
        expect(mockLogger.warning).toHaveBeenCalledWith(message, {})
    })

    it('Should call error on winston', () => {
        const message = 'ERROR'
        logger.error(message)
        expect(mockLogger.error).toHaveBeenCalledWith(message, {
            error: undefined,
            meta: {}
        })
    })

    it('Should call error on winston with Error', () => {
        const err: Error = {
            message: 'MESSAGE',
            name: 'NAME'
        }

        logger.error(err.message, err)
        expect(mockLogger.error).toHaveBeenCalledWith(err.message, {
            error: err,
            meta: {}
        })
    })
})
