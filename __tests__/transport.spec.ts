import { createTransport } from '../src/transport'
import * as c from '../src/transport/console'
import * as f from '../src/transport/file'
import * as g from '../src/transport/graylog'

describe('createTransport', () => {

    let consoleTransportMock
    let fileTransportMock
    let graylogTransportMock

    beforeEach(() => {
        consoleTransportMock = jest.spyOn(c, 'createConsoleTransport')
        fileTransportMock = jest.spyOn(f, 'createFileTransport')
        graylogTransportMock = jest.spyOn(g, 'createGraylogTransport')
    })

    it('Should create console transport', () => {
        createTransport({
            type: 'console'
        }, 'clazz')

        expect(consoleTransportMock).toHaveBeenCalled()
    })

    it('Should create file transport', () => {
        createTransport({
            type: 'file',
            filename: 'foo'
        }, 'clazz')
        
        expect(fileTransportMock).toHaveBeenCalled()
    })

    it('Should create graylog transport', () => {
        createTransport({
            type: 'graylog',
            hostname: 'host',
            servers: [
                {
                    host: 'host',
                    port: 1234
                }
            ]
        }, 'clazz')

        expect(graylogTransportMock).toHaveBeenCalled()
    })

})

