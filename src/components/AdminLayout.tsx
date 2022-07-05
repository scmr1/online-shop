import { Layout, Menu, MenuProps } from 'antd'
import { observer } from 'mobx-react-lite'
import { Link, Outlet } from 'react-router-dom'
import { authStore } from '../stores/AuthStore'
import { LoginForm } from './LoginForm'
import classNames from '@/globalStyles.module.less'

interface IAdminLayoutProps { }

const menuItems: MenuProps['items'] = [
    {
        key: 'Users',
        label: <Link to="users">Users</Link>,
    },
    {
        key: 'Products',
        label: <Link to="products">Products</Link>,
    },
    {
        key: 'Orders',
        label: <Link to="orders">Orders</Link>,
    },
    {
        key: 'Category',
        label: <Link to="category">Category</Link>,
    },
]

export const AdminLayout: React.FC<IAdminLayoutProps> = observer((props) => {
    if (!authStore.isAutheticated) {
        return <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <LoginForm />
        </div>
    }
    return (
        <Layout className={classNames.fullHeight}>
            <Layout.Sider>
                <Menu items={menuItems} theme="dark" />
            </Layout.Sider>

            <Layout.Content>
                <div style={{ padding: 16 }}>
                    <Outlet />
                </div>
            </Layout.Content>

        </Layout>
    )
})
