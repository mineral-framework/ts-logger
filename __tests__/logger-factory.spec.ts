import { LoggerFactory, Logger } from '../src'


describe('LoggerFactory', () => {
    it('throws an error when setup is not called before getting a logger', () => {
        expect(() => {
            LoggerFactory.getGlobal('spec')
        }).toThrowError('LoggerFactory is not setup')
    })    

    it('Create logger', () => {
        LoggerFactory.setup({
            level: 'debug',
            transports: []
        })
    
        const logger: Logger = LoggerFactory.getGlobal('spec')
    
        expect(logger).toBeDefined()
    })
})

