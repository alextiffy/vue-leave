import user from '../../api/users'
import * as types from '../mutation-types'

export const userLogin = ({ dispatch }, userId, token) => {
    dispatch(types.FETCHING_DATA_START);
    user.loginByToken(
        userId,
        token,
        (user) => {
            dispatch(types.FETCHING_DATA_STOP);
            dispatch(types.USER_LOGIN_SUCCESS, user)
        },
        () => {
            dispatch(types.FETCHING_DATA_STOP);
            dispatch(types.USER_LOGIN_FAIL);
        }
    )
}
