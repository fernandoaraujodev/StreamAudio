import server from './server.js'
import { logger } from './util.js'

server.listen(5000)
.on('listening', () => logger.info('server rodando!'))