import { Alert, Button, Card, Input, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { authStore } from '../stores/AuthStore'

interface ILoginFormProps { }
export const LoginForm: React.FC<ILoginFormProps> = observer(() => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = () => {
        authStore.login(username, password)
    }

    return (
        <Card title="Log in">
            <Space direction="vertical">
                <Input
                    placeholder="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <Input
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                {authStore.isLoginFailed && <Alert type="error" message="incorrect login or password" />}
                <Button onClick={handleLogin}>Ok</Button>
            </Space>
        </Card>
    )
})
