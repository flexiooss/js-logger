import {FakeLog} from './FakeLog'
import {LoggerInterface} from './LoggerInterface'

const fakeLog = new FakeLog()

/**
 * @implements {LoggerInterface}
 */
export class FakeLogger extends LoggerInterface{
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
