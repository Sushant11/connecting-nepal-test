import React from 'react';

import { useHistory } from "react-router-dom";

import {
    DashboardOutlined,
    BookOutlined,
    OneToOneOutlined,
    PieChartOutlined,
    TeamOutlined,
    PercentageOutlined,
    DollarCircleOutlined,
    HomeOutlined,
    StarOutlined,
    CalendarOutlined,
} from '@ant-design/icons';

import { Menu } from 'antd';

const MenuItem = () => {

    let history = useHistory();
    console.log('history :>> ', history);

    function handleRoute(e) {
        switch (e.key) {
            case '/dashboard':
                history.push('/')
                break;

            case '/booking':
                history.push('/booking')
                break;

            case '/room':
                history.push('/room')
                break;

            case '/food':
                history.push('/food')
                break;

            case '/staff':
                history.push('/staff')
                break;

            case '/rate':
                history.push('/rate')
                break;

            case '/price':
                history.push('/price')
                break;

            case '/property':
                history.push('/property')
                break;

            case '/facility':
                history.push('/facility')
                break;

            case '/calendar':
                history.push('/calendar')
                break;

            default:
                history.push('/')
        }

    }
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[history.location.pathname]}>
            <Menu.Item key="/dashboard" icon={<DashboardOutlined />} onClick={handleRoute}>
                Dashboard
            </Menu.Item>
            <Menu.Item key="/booking" icon={<BookOutlined  />} onClick={handleRoute}>
                Booking
            </Menu.Item>
            <Menu.Item key="/room" icon={<OneToOneOutlined  />} onClick={handleRoute}>
                Room
            </Menu.Item>
            <Menu.Item key="/food" icon={<PieChartOutlined  />} onClick={handleRoute}>
                Food
            </Menu.Item>
            <Menu.Item key="/staff" icon={<TeamOutlined  />} onClick={handleRoute}>
                Staff
            </Menu.Item>
            <Menu.Item key="/rate" icon={<PercentageOutlined  />} onClick={handleRoute}>
                Rate
            </Menu.Item>
            <Menu.Item key="/price" icon={<DollarCircleOutlined  />} onClick={handleRoute}>
                Price
            </Menu.Item>
            <Menu.Item key="/property" icon={<HomeOutlined  />} onClick={handleRoute}>
                Property
            </Menu.Item>
            <Menu.Item key="/facility" icon={<StarOutlined   />} onClick={handleRoute}>
                Facility
            </Menu.Item>
            <Menu.Item key="/calendar" icon={<CalendarOutlined  />} onClick={handleRoute}>
                Calendar
            </Menu.Item>
        </Menu>
    );
};

export default MenuItem;