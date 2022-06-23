import { Button, Card, Input, Space } from "antd";
import React from "react";
import { authStore } from "../stores/AuthStore";

interface ILoginFormProps { }
export const LoginForm: React.FC<ILoginFormProps> = () => {
    const handleLogin = () => {
        authStore.login("","")
    }
    return <Card title='Log in'>
        <Space direction="vertical">
            <Input placeholder="username"/>
            <Input placeholder="password" type="password"/>
            <Button onClick={handleLogin}>Ok</Button>
        </Space>
    </Card>
}