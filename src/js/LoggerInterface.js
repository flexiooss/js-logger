/**
 * @interface
 */
export class LoggerInterface {
  /**
   *
   * @return {this}
   */
  debug() {
  }

  /**
   * @return {LogInterface}
   */
  info() {
  }

  /**
   * @return {LogInterface}
   */
  warn() {
  }

  /**
   * @return {LogInterface}
   */
  error() {
  }
  /**
   *
   * @param {LogInterface} log
   * @param {Object} options
   */
  log(log, options) {
  }

  /**
   * @return {LogInterface}
   */
  builder(){

  }
}
