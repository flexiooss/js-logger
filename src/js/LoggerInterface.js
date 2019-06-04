/**
 * @interface
 */
export class LoggerInterface {
  /**
   *
   * @return {this}
   */
  debug() {
    throw new Error('Not implemented yet')
  }

  /**
   * @return {LogInterface}
   */
  info() {
    throw new Error('Not implemented yet')
  }

  /**
   * @return {LogInterface}
   */
  warn() {
    throw new Error('Not implemented yet')
  }

  /**
   * @return {LogInterface}
   */
  error() {
    throw new Error('Not implemented yet')
  }
  /**
   *
   * @param {LogInterface} log
   * @param {Object} options
   */
  log(log, options) {
    throw new Error('Not implemented yet')
  }

  /**
   * @return {LogInterface}
   */
  builder(){
    throw new Error('Not implemented yet')

  }
}
