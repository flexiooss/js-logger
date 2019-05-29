import {TestCase} from 'code-altimeter-js'
import {LogHandler} from '../js/LogHandler'

const assert = require('assert')

export class TestLogger extends TestCase {

  testLogHandler() {
    const logHandler = new LogHandler()
  }

}

runTest(TestLogger)
