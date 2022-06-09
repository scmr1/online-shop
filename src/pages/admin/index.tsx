import React from "react"

interface IAdminHomeProps {
    message:string
}
export const AdminHome: React.FC<IAdminHomeProps> = (props) => {
    props.message
    return (
        <h1>{props.message}</h1>
        
    )
}