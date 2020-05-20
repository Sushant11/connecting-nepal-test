import React from 'react';
import { Result, Button } from 'antd';

import { useHistory } from "react-router-dom";

const NotFound = () => {
    let history = useHistory();

    function handleRoute(e) {
        history.push('/')
    }
    return (
        <Result
            status="404"
            title="Page Not Found"
            subTitle="Development in process."
            extra={<Button type="primary" onClick={handleRoute}>Dashboard</Button>}
        />
    );
};

export default NotFound;