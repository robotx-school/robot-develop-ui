import React, { useContext } from "react";
import { Button, Form, Input, Card, Alert, Space } from 'antd';
import robotApiHost from '../Contexts/robotApiHost';


export const Settings = () => {
    const { host, setRobotApiHost } = useContext(robotApiHost);
    const setRobotHost = (values) => {
        setRobotApiHost({ host: values.robotHost });
    };

    return (
        <>
            <Card title="RDUI Settings" style={{ height: "100%" }}>
                <Alert style={{ marginBottom: 20 }} type="warning" message="This settings will apply only for this RDUI tab. You can dump them to localstorage of your browser. Or you can clear them." />
                <Form
                    name="basic"
                    onFinish={setRobotHost}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Robot host (ip:port)"
                        name="robotHost"
                        rules={[
                            {
                                required: true,
                                message: 'Please robot host!',
                            },
                        ]}
                    >
                        <Input style={{ width: 200 }} placeholder="0.0.0.0:9999" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            <Card title="Storage" style={{ height: "100%", marginTop: 20 }}>
                <Space direction="horizontal">
                    <Button type="primary">Dump</Button>
                    <Button type="dashed">Load dump</Button>
                    <Button type="primary" danger>Clear settings</Button>
                </Space>

            </Card>
        </>
    )
}