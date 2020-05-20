import React from 'react'

import Logo from '../../../assets/logo.png'
import LogoMin from '../../../assets/logo1.png'

import { Layout } from 'antd';
import MenuItem from './MenuItem';
const { Sider } = Layout;

const AppSidenav = ({ collapsed }) => {
    return (

        <Sider trigger={null} collapsible collapsed={!collapsed}>
            {collapsed ? <img src={Logo} alt="Logo" style={{
                'width': '100%',
                'padding': '4px 6px 1px 4px ',
                'transition': 'ease 0.2s',
            }} /> : <img src={LogoMin} alt="Logo Min" style={{
                'width': '60%',
                'margin': '10px 0 4px 15px',
                'transition': 'ease 0.2s',
            }} />}
            <MenuItem/>
        </Sider>

    );
};

export default AppSidenav;