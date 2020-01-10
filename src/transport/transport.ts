import { ConsoleTransport } from './console'
import { GraylogTransport } from './graylog'
import { FileTransport } from './file'

export type Transport = GraylogTransport | ConsoleTransport | FileTransport
