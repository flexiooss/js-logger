import {FlexEnum} from '@flexio-oss/flex-types'

class Level extends FlexEnum {

}

Level.initEnum(['DEBUG', 'INFO', 'WARN', 'ERROR'])

/**
 * @property {Level} Level#DEBUG
 * @property {Level} Level#INFO
 * @property {Level} Level#WARN
 * @property {Level} Level#ERROR
 */
export {Level}
