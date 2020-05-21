import React, { Fragment, useState } from 'react';
import { Modal, Form, Input, Select, DatePicker, Button } from 'antd';

import {
    PlusOutlined
} from '@ant-design/icons';

const { Option } = Select;

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
            cancelText="Cancel"
            onCancel={onCancel}
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
                </Form.Item>  <Form.Item
                    name="roomNo"
                    rules={[{ required: true, message: 'Please select a Room Number!' }]}
                >
                    <Select placeholder="Select a Room Number">
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="date"
                    rules={[{ required: true, message: 'Please select a data!' }]}
                >
                    <DatePicker placeholder="Date Picker" {...layout} style={{ width: '100%' }} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

const BookingModal = (props) => {
    const [visible, setVisible] = useState(false)

    const onCreate = values => {
        console.log('Received values of form: ', values);
        setVisible(false);
    };

    return (
        <Fragment>
            <Button type="primary" className="header-btn float-right" icon={<PlusOutlined />} onClick={() => setVisible(true)}>
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