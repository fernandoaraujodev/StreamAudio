import server from './server.js'
import config from './config.js'
import { logger } from './util.js'

server.listen(3000)
.on('listening', () => logger.info(`server rodando em ${config.port}`))