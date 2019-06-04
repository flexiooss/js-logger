/**
 * @interface
 */
export class LogInterface {
  /**
   *
   * @return {LogInterface}
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
   * @param {(String|Object)} log
   * @return {LogInterface}
   */
  pushLog(log) {

  }

  /**
   * @return {Set<(String|Object)>}
   */
  logs() {

  }

  /**
   *
   * @return {Level}
   */
  level() {
  }
}
