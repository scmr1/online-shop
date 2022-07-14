import axios from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'

class AuthStore {
    isAutheticated = false
    isLoginFailed = false

    constructor() {
        makeAutoObservable(this)
    }

    async login(username: string, password: string) {
        const response = await axios.post(
            '/api/auth/login',
            { username, password },
            {
                validateStatus: status => status < 400 || status === 401,
            },
        )
        if (response.status === 401) {
            // Failed login
            runInAction(() => {
                this.isLoginFailed = true
            })
        } else {
            // Successful login
            runInAction(() => {
                this.isAutheticated = true
                this.isLoginFailed = false
            })
        }


    }

    async logout() {
        await axios.post('/api/auth/logout')
        runInAction(() => {this.isAutheticated = false})
    }
}

export const authStore = new AuthStore()
