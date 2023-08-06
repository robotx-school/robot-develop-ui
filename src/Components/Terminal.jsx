import React, { useEffect, useState } from "react";
import { Input, Button, Form, Typography, Space, Tooltip } from 'antd';

const { Text } = Typography;


export const Terminal = ({ sendFunction, initialCommands, serverPromptName, inputPlaceholder = "Command>", autoCommands = [] }) => {
    const [terminalData, setTerminalData] = useState([]); // ["ctd", "CTD online! API version: 0.0.1; Local IP: 0.0.0.0; Stream port: 0000"]
    const sendComamnd = (command) => {
        sendFunction(command);
        setTerminalData([...terminalData, ["client", command]]);
    }

    useEffect(() => {
        initialCommands.forEach(command => {
            sendComamnd(command);
        });
    }, [])


    return (
        <>
            <Space direction="horizontal" style={{ marginBottom: 15 }}>
                {autoCommands.map((option, index) => (
                    <Tooltip title={option.tooltip} key={index}>
                        <Button onClick={() => { sendComamnd(option.command) }}>{option.title}</Button>
                    </Tooltip>
                ))}

            </Space>
            <div>
                {terminalData.map((entry, index) => (
                    <div key={index} className="terminal-entry">
                        <Text code type={entry[0] === "client" ? "success" : "danger"}>{entry[0] === "client" ? "Client:>" : serverPromptName}</Text>
                        <Text>{entry[1]}</Text>
                    </div>
                ))}
            </div>
            <Form
                name="basic"
                layout="inline"
                requiredMark=""
                autoComplete="off"
                onFinish={(data) => { sendComamnd(data.command) }}
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
                    <Input placeholder={inputPlaceholder}/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Send
                    </Button>
                </Form.Item>
            </Form>

        </>
    )
}