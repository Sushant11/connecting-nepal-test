import React, { Fragment, useState } from 'react';
import { Modal, Form, Input, Select, DatePicker, Button, message } from 'antd';
import { useHistory } from 'react-router-dom'
import Rooms from '../../Rooms'

import {
    PlusOutlined
} from '@ant-design/icons';

const { Option } = Select;
const { RangePicker } = DatePicker;

const layout = {
    wrapperCol: { span: 24 },
};

const BookingCreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();

    return (
        <Modal
            visible={visible}
            title="Add Booking"
            okText="Add"
            width='608px'
            cancelText="Cancel"
            onCancel={() => {
                form.resetFields();
                onCancel();
            }}
            onOk={() => {
                form
                    .validateFields()
                    .then(values => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch(info => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                {...layout}
                form={form}
                name="basic"
                initialValues={{ remember: true }}
            >
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please enter a Name!' }]}
                >
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                    name="roomNo"
                    rules={[{ required: true, message: 'Please select a Room Number!' }]}
                >
                    <Select placeholder="Select a Room Number" showSearch
                        optionFilterProp="children">
                        {Rooms.map(i => <Option value={i.key} key={i.key}>{i.key}</Option>)}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="date"
                    rules={[{ required: true, message: 'Please select a date!' }]}
                >
                    <RangePicker {...layout} style={{ width: '100%' }} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

const BookingModal = (props) => {
    const [visible, setVisible] = useState(false)
    const history = useHistory();

    let bookings = JSON.parse(localStorage.getItem('Bookings')) || []

    const onCreate = values => {
        console.log('Received values of form: ', values);
        bookings.push(values)
        localStorage.setItem('Bookings', JSON.stringify(bookings))
        setVisible(false);
        message.success('Booking added successfully.');
        history.push("/");
    };

    return (
        <Fragment>
            <Button type="primary" style={props.style} className="header-btn float-right" icon={<PlusOutlined />} onClick={() => setVisible(true)}>
                New Booking
    </Button>
            <BookingCreateForm visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }} />
        </Fragment>

    );
};

export default BookingModal;