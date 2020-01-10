import { ConsoleTransport } from './console'
import { FileTransport } from './file'
import { GraylogTransport } from './graylog'

export type Transport = ConsoleTransport | FileTransport | GraylogTransport
