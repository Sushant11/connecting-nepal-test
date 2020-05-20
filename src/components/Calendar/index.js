import React from 'react';

import { Calendar as Calender } from 'antd';

const Calendar = () => {

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    }
    return (
        <div>
            <Calender onPanelChange={onPanelChange} />
        </div>
    );
};

export default Calendar;