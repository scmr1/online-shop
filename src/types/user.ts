import { IPagination } from "./pagination"

export interface IUser {
    id:number,
    username:string,
    firstName:string,
    lastName:string,
    password:string
}
export interface IUserListResponse {
    data:Omit<IUser, 'password'>[],
    pagination:IPagination
} 
