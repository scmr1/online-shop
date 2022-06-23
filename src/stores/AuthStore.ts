import { makeAutoObservable } from "mobx"

class AuthStore {
    isAutheticated = false

    constructor() {
        makeAutoObservable(this)
    }

    login(username: string, password: string) {
        this.isAutheticated = true
    }

    logout() {
        this.isAutheticated = false
    }
}

export const authStore = new AuthStore()
