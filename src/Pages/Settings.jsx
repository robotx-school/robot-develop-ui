import React, { useContext } from "react";
import { Button, Form, Input, Typography } from 'antd';
import robotApiHost from '../Contexts/robotApiHost';

const { Title } = Typography;


export const Settings = () => {
    const { host, setRobotApiHost } = useContext(robotApiHost);
    const setRobotHost = (values) => {
        setRobotApiHost({ host: values.robotHost });
    };

    return (
        <>
            <Title level={3}>RDUI Settings</Title>
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
        </>
    )
}