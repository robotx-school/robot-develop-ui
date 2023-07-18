import React, {useContext} from "react";
import { Button, Form, Input } from 'antd';
import robotApiHost from '../Contexts/robotApiHost';

export const Settings = () => {
    const { host, setRobotApiHost } = useContext(robotApiHost);
    const setRobotHost = (values) => {
        setRobotApiHost({host: values.robotHost});
    };

    return (
        <Form
            name="basic"
            layout="inline"

            onFinish={setRobotHost}
            autoComplete="off"
        >
            <Form.Item
                label="Robot host(ip:port)"
                name="robotHost"
                rules={[
                    {
                        required: true,
                        message: 'Please robot host!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Set host
                </Button>
            </Form.Item>
        </Form>
    )
}