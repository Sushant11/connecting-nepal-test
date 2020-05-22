import React, { useState, useEffect } from 'react';

import { Calendar, Select } from 'antd';
import BookingModal from '../Common/BookingModal';
import moment from 'moment'

import Rooms from '../../Rooms'

const { Option } = Select;

const Booking = () => {

    const [booking, setBooking] = useState('')
    let Bookings = JSON.parse(localStorage.getItem('Bookings'))

    const handleChange = (value) => {
        let data = Bookings.filter(i => i.roomNo === value)
        setBooking(data)
        console.log('moment(data.date) :>> ', booking);
    }

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    }

    return (
        <div>
            <div className="booking-input">
                <Select placeholder="Select a Room Number" showSearch
                    optionFilterProp="children"
                    style={{ width: '12%' }}
                    onChange={handleChange}
                >
                    {Rooms.map(i => <Option value={i.key} key={i.key}>{i.key}</Option>)}
                </Select>
                <BookingModal style={{ float: 'left', margin: '0px 0px 0 10px' }} />
            </div>

            <Calendar />
        </div>
    );
};

export default Booking;