import React, { useEffect, useState } from "react";
import { Card, Row, Col, Form, Button, Select, Typography, Space } from 'antd';

const { Text } = Typography;

export const Joystick = () => {
    const [lastKey, setLastKey] = useState("");
    useEffect(() => {
        document.addEventListener("keydown", function (event) {
            setLastKey(event.key);
            console.log(event);
        });
    }, [lastKey])
    return (
        <Row gutter={[10, 10]}>
            <Col xs={24} xl={12}>
                <Card title="Joystick" style={{ height: "100%" }}>

                    <Text code type="success">W A S D</Text>
                    <Text code>Last key: {lastKey}</Text>
                </Card>
            </Col>
            <Col xs={24} xl={12}>
                <Card title="Joystick config" style={{ height: "100%" }}>
                    <Form
                        name="basic"

                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            preset: "diff_robot_generic"
                        }}
                        requiredMark=""
                        autoComplete="off"
                        onFinish={(data) => { console.log(data) }}
                    >
                        <Form.Item
                            name="preset"
                            label="Preset"
                            rules={[
                                {
                                    required: true,
                                    message: '',
                                },
                            ]}
                        >
                            <Select
                                options={[
                                    {
                                        value: 'diff_robot_generic',
                                        label: 'Diff Robot 0 & 1 motors',
                                    },
                                    {
                                        value: 'omni_robot_generic',
                                        label: 'Omni robot with motors 0; 1; 2',
                                    },
                                    {
                                        value: 'custom',
                                        label: 'Custom',
                                    },
                                ]}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Configure
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}