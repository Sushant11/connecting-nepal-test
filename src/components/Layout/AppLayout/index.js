import React, { useState } from 'react';
import { Layout } from 'antd';

import AppHeader from '../Header';
import AppSidenav from '../SideNav';
import AppFooter from '../Footer';

import '../../../styles/App.css';

const { Content } = Layout;

const AppLayout = props => {
  const [collapsed, setCollapsed] = useState('true')

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout>
      <AppSidenav collapsed={collapsed} />
      <Layout className="site-layout">
        <AppHeader collapsed={collapsed} toggle={toggle} />
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px 8px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
        {/* <AppFooter /> */}
      </Layout>
    </Layout>
  );
}

export default AppLayout;
