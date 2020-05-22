import React from 'react';

import { Result, Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const Dashboard = () => {
    return (
        <Result
            icon={<HomeOutlined />}
            title="Thanks for logging in!"
            extra={<Button type="primary">Book Rooms</Button>}
        />
    );
};

export default Dashboard;