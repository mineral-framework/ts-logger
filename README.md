# Mineral Logger

A logger for the Mineral Framework

[![Build Status](https://travis-ci.org/mineral-framework/ts-logger.svg?branch=master)](https://travis-ci.org/mineral-framework/ts-logger) [![Coverage Status](https://coveralls.io/repos/github/mineral-framework/ts-logger/badge.svg?branch=master)](https://coveralls.io/github/mineral-framework/ts-logger?branch=master) ![GitHub package.json version](https://img.shields.io/github/package-json/v/mineral-framework/ts-logger?logo=npm)

## Table of contents
* [Usage](#usage)
* [Configuration](#configuration)
* [Transports](#transports)
  * [Console](#console)
  * [Graylog](#graylog)
  * [File](#file)


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


### Console
Console transport

Possible configuration:

| Name         | Description    |
| ------------ | -------------- |
| `type`       | 'console'      |
| `level`      | Log level. Possible values: 'debug', 'info', 'warning', 'error' |

### Graylog
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

### File
File transport

| Name         | Description    |
| ------------ | -------------- |
| `type`       | 'file'         |
| `level`      | Log level. Possible values: 'debug', 'info', 'warning', 'error' |
| `filename`   | Name of the logfile |