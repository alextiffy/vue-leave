import * as types from '../mutation-types'

export const setActiveGroup = ({ dispatch, state }, activeGroup) => {
    state.menus.activeMenuGroup === activeGroup
    ? dispatch(types.TOUCH_MENU, '')
    : dispatch(types.TOUCH_MENU, activeGroup)
}
