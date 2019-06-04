import {FakeLog} from './FakeLog'

const fakeLog = new FakeLog()

/**
 * @implements {LoggerInterface}
 */
export class FakeLogger {
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
  builder() {
    return fakeLog
  }
}
