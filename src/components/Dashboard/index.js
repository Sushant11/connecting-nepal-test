import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment'

import { Result, Button, Table, Card, Divider, Typography } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const { Title } = Typography;

const columns = [
    {
        title: 'S.N',
        dataIndex: 'sn',
        key: 'sn',
        render: (text, record, index) => {
            return index + 1
        }
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Room Number',
        dataIndex: 'roomNo',
        key: 'roomNo',
    },
    {
        title: 'From',
        dataIndex: 'from',
        key: 'from',
        render: (text, record, index) => {
            return moment(record.date[0]).format('MM-DD-YYYY')
        }
    },

    {
        title: 'To',
        dataIndex: 'to',
        key: 'to',
        render: (text, record, index) => {
            return moment(record.date[1]).format('MM-DD-YYYY')
        }
    },
];

let Bookings = JSON.parse(localStorage.getItem('Bookings'))

const data = Bookings


const Dashboard = () => {

    return (
        <Fragment>
            <Result
                icon={<HomeOutlined />}
                title="Thanks for logging in!"
                extra={<Button type="primary"><Link to='/Booking'>Book Rooms</Link></Button>}
            />

            <Divider orientation="center"> <Title level={3} className='bookings-dashboard'>Bookings</Title></Divider>
            <Card className='card-dashboard'><Table columns={columns} dataSource={data} /></Card>

        </Fragment>
    );
};

export default Dashboard;