import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag, Typography } from 'antd';

const { Title } = Typography;



export const BoardTest = () => {
    const changeTestStatus = (test_name, new_status) => {
        setTests(tests.map(test => (test.name === test_name) ? { key: test.key, name: test.name, description: test.description, status: new_status, payload: test.payload } : test));
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (_, record) => (
                <Tag color={{ "Not tested": "yellow", "OK": "green", "Fail": "red" }[record.status]} key={record.key}>
                    {record.status}
                </Tag>
            )
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (_, record) => (
                <Space direction="horizontal">
                    <Button type="primary">Test</Button>
                    <Button type="primary" style={{ backgroundColor: "green" }} onClick={() => { changeTestStatus(record.name, "OK") }}>Set OK</Button>
                    <Button type="primary" danger onClick={() => { changeTestStatus(record.name, "Fail") }}>Set Fail</Button>
                    <Button type="dashed" onClick={() => { changeTestStatus(record.name, "Not tested") }}>Clear</Button>
                </Space>
            ),

        },
    ];
    const [tests, setTests] = useState([
        {
            key: 'motors.0.steps',
            name: 'motors.0.steps',
            description: 'Motor 0 run for 100 steps forward',
            status: "Not tested",
            payload: [1, 1, 1]
        },
        {
            key: 'motors.1.steps',
            name: 'motors.1.steps',
            description: 'Motor 1 run for 100 steps forward',
            status: "Not tested",
            payload: [1, 1, 1]
        },
        {
            key: 'servos.0.angle',
            name: 'servos.0.angle',
            description: 'Rotate servo 0 to 20 deg angle',
            status: "Not tested",
            payload: [1, 1, 1]
        }
    ]);

    return (
        <>
            <Title level={3}>Board test: {tests.filter(test => test.status == "OK").length}/{tests.length}</Title>
            <Table columns={columns} dataSource={tests} />
            <Space direction="horizontal">
                <Button>Download report</Button>
                <Button type="primary" danger>Clear test results</Button>
            </Space>
        </>
    )
}