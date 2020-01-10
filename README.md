# Mineral Logger

A logger for the Mineral Framework

## Table of contents
* [Usage](#usage)
* [Configuration](#configuration)
* [Transports](#transports)
  * [Console](#console-transport)
  * [Graylog](#graylog-transport)
  * [File](#file-transport)


## Usage

``` js
import { LoggerFactory, Logger } from '@mineral/logger'

LoggerFactory.setup({
    level: 'debug',
    transports: [
        {
            type: 'console'
        }
    ]
})

const logger: Logger = LoggerFactory.getGlobal('root')

logger.info('Hello World!')

```

## Configuration
Possible configuration:

| Name         | Description    |
| ------------ | -------------- |
| `level`      | Log level. Possible values: 'debug', 'info', 'warning', 'error' |
| `transports` | Logging transports |

## Transports
* Console

* Graylog


### Console {#console-transport}
Console transport

Possible configuration:

| Name         | Description    |
| ------------ | -------------- |
| `type`       | 'console'      |
| `level`      | Log level. Possible values: 'debug', 'info', 'warning', 'error' |

### Graylog {#graylog-transport}
Graylog transport

Possible configuration:

| Name             | Description    |
| ---------------- | -------------- |
| `type`           | 'graylog'      |
| `level`      | Log level. Possible values: 'debug', 'info', 'warning', 'error' |
| `hostname`       | Hostname       |
| `servers`        | Array of graylog servers |
| `servers[].host` | Host of the graylog server |
| `servers[].port` | Port of the graylog server |

### File {#file-transport}
File transport

| Name         | Description    |
| ------------ | -------------- |
| `type`       | 'file'         |
| `level`      | Log level. Possible values: 'debug', 'info', 'warning', 'error' |
| `filename`   | Name of the logfile |