import * as types from '../mutation-types'

export const setDatetime = ({ dispatch }, fieldName , value) => {
    switch (fieldName) {
        case 'subStartTime':
            dispatch(types.SUB_LEAVE_SET_START_TIME, value);
            break;
        case 'subEndTime':
            dispatch(types.SUB_LEAVE_SET_END_TIME, value);
            break;
        default:
            return;
    }
}
