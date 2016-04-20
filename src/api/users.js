const _users = [
    {'id': 1, 'name': 'MXK', 'type': 'Hr', 'token': 'd1aa29f03978784be70a84138647d1e1'},
    {'id': 2, 'name': '赵铁柱', 'type': 'Normal', 'token': '438f3e151a17d448d00114c1b9e8c0fc'},
    {'id': 3, 'name': '张全蛋', 'type': 'Normal', 'token': '8c7db65190683baee65ed0e00e7e4a0c'}
]

export default {
    loginByToken (id, token, cb, errorCb) {
        setTimeout(() => {
            let user = _users.find(user => user.id === id && user.token === token)
            user ? cb(user) : errorCb();
        }, 1000)
    }
}