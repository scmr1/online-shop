import axios from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'
import { IUserListResponse } from '@/types/user'

class UsersListStore {

    response: IUserListResponse | null = null
    constructor() {
        makeAutoObservable(this)
        this.fetch()
    }
    async fetch() {
        const result = await axios.get<IUserListResponse>('/api/users?page=1&perPage=10')
        runInAction(() => {
            this.response = result.data
        })
    }

}
export const usersListStore = new UsersListStore()
