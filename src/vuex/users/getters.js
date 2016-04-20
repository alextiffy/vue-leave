export const getIsLogin = (state) => {
    console.log(state.users.isGuest);
    return state.users.isGuest === false;
}

export const getIsGuest = (state) => {
    console.log('get is Guest from users getters')
    return state.users.isGuest;
}

export const getUser = (state) => {
    console.log('get User from users getters')
    return state.users.user;
}


