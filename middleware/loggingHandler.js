const {format, transports} = require('winston')
let winston = require('winston')
const fs = require('fs')
const logDir = "logs";
if(!fs.existsSync(logDir)){
    fs.mkdirSync(logDir);
}

const logger = winston.createLogger({
    format : format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf((info) =>
            JSON.stringify({
                t: info.timestamp,
                l: info.level,
                m: info.message,
                s: info.splat !== undefined ? `${info.splat}` : '',
            }) + ','
        )
    ),
    transports : [
        new(require('winston-daily-rotate-file'))({
            filename: `${logDir}/webclient-debug.log`,
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchived: true,
            level: 'debug'
        }),
        new(require('winston-daily-rotate-file'))({
            filename: `${logDir}/webclient-debug.log`,
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchived: true,
            level: 'error'
        }),
        new(require('winston-daily-rotate-file'))({
            filename: `${logDir}/webclient-debug.log`,
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchived: true,
            level: 'warn'
        }),
        new(require('winston-daily-rotate-file'))({
            filename: `${logDir}/webclient-debug.log`,
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchived: true,
            level: 'ibfo'
        })
    ],
    exitOnError: false
});

module.exports = logger;