import React, { useState } from "react";
import { Row, Col, Input, Button, Form, Card, Typography } from 'antd';

const { Text } = Typography;


export const CTDTerminal = () => {
    const [ctdTerminalData, setCtdTerminalData] = useState([
        ["client", "CTD Client Hello package sent"],
        ["ctd", "CTD online! API version: 0.0.1; Local IP: 0.0.0.0; Stream port: 0000"]
    ]);

    return (
        <>
            <Row gutter={[10, 10]}>
                <Col xs={24} xl={12}>
                    <Card title={"CTD Live"} style={{ height: 1000 }}>
                        <iframe src="http://77.37.184.204:2566" style={{ width: "100%", height: 900, border: "none" }} title="CTD   "></iframe>
                    </Card>
                </Col>
                <Col xs={24} xl={12}>
                    <Card title={"CTD Terminal"} style={{ height: "100%" }}>
                        <div>
                            {ctdTerminalData.map((entry, index) => (
                                <div key={index} class="terminal-entry">
                                    <Text code type={entry[0] === "client" ? "success" : "danger"}>{entry[0] === "client" ? "Client:>" : "CTD:>"}</Text>
                                    <Text>{entry[1]}</Text>
                                </div>
                            ))}
                        </div>
                        <Form
                            name="basic"
                            layout="inline"
                            requiredMark=""
                            autoComplete="off"
                            onFinish={(data) => { setCtdTerminalData([...ctdTerminalData, ["client", data.command]]) }}
                            style={{ marginTop: 20 }}
                        >
                            <Form.Item
                                style={{ width: "90%" }}
                                name="command"
                                rules={[
                                    {
                                        required: true,
                                        message: '',
                                    },
                                ]}
                            >
                                <Input placeholder="Command>" />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Send
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>

        </>
    )
}