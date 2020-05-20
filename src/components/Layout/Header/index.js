import React from 'react';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PlusOutlined,
    BellOutlined,
    UserOutlined
} from '@ant-design/icons';

import { Layout, Input, Button, Badge, Avatar } from 'antd';
const { Header } = Layout;
const { Search } = Input;
const AppHeader = props => {

    const { collapsed, toggle } = props;

    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
            })}

            <Search
                placeholder="Search"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
            />

            <Avatar className=" header-btn float-right" type="primary" icon={<UserOutlined />} />
            <Badge dot className=" header-btn float-right" >
                <Button shape="circle" icon={<BellOutlined />} size="default" />
            </Badge>
            <Button type="primary" className="header-btn float-right" icon={<PlusOutlined />}>
                New Booking
    </Button>
        </Header>
    );
};

export default AppHeader;