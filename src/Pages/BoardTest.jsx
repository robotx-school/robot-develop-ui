import React, { useState } from "react";
import { Button, Space, Table, Tag, Typography } from 'antd';

const { Title } = Typography;

function download_as_file(filename, data) {
    const blob = new Blob([data], { type: "text/csv" });
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    } else {
        const elem = window.document.createElement("a");
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
}


export const BoardTest = () => {
    const changeTestStatus = (test_name, new_status) => {
        setTests(tests.map(test => (test.name === test_name) ? { key: test.key, name: test.name, description: test.description, status: new_status, payload: test.payload, type: test.type } : test));
    }
    const testStatus = () => {
        return `${tests.filter(test => test.status === "OK").length}/${tests.length}`
    }
    const executeTest = (name, payload, type = "manual") => {
        console.log(name, payload, type);
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
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            render: (_, record) => (
                <Tag color={{ "manual": "blue", "auto": "green" }[record.type]} key={record.key}>
                    {record.type}
                </Tag>
            )
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
                    <Button type="primary" onClick={() => executeTest(record.name, record.payload, record.type)}>Test</Button>
                    <Button type="primary" style={{ backgroundColor: "green" }} onClick={() => { changeTestStatus(record.name, "OK") }}>Set OK</Button>
                    <Button type="primary" danger onClick={() => { changeTestStatus(record.name, "Fail") }}>Set Fail</Button>
                    <Button type="dashed" onClick={() => { changeTestStatus(record.name, "Not tested") }}>Clear</Button>
                </Space>
            ),

        },
    ];
    const [tests, setTests] = useState([
        {
            key: 'spi.checksum',
            name: 'spi.checksum',
            description: 'Check if spi communication works successful (auto test)',
            status: "Not tested",
            payload: [1, 1, 1],
            type: "auto"
        },
        {
            key: 'motors.0.steps',
            name: 'motors.0.steps',
            description: 'Motor 0 run for 100 steps forward',
            status: "Not tested",
            payload: [1, 1, 1],
            type: "manual"
        },
        {
            key: 'motors.1.steps',
            name: 'motors.1.steps',
            description: 'Motor 1 run for 100 steps forward',
            status: "Not tested",
            payload: [1, 1, 1],
            type: "manual"
        },
        {
            key: 'servos.0.angle',
            name: 'servos.0.angle',
            description: 'Rotate servo 0 to 20 deg angle',
            status: "Not tested",
            payload: [1, 1, 1],
            type: "manual"
        }
    ]);

    return (
        <>
            <Title level={3}>Board test: {testStatus()} passed</Title>
            <Table columns={columns} dataSource={tests} />
            <Space direction="horizontal">
                <Button onClick={() => { download_as_file("report.txt", tests.map(test => `${test.name}: ${test.status}`).join("\n") + `\n\n----------\nTotal tests passed: ${testStatus()}`) }}>Download report</Button>
                <Button type="primary" danger onClick={() => {
                    setTests(tests.map(test => { return { key: test.key, name: test.name, description: test.description, status: "Not tested", payload: test.payload, type: test.type } }));
                }
                }>Clear test results</Button>
            </Space>
        </>
    )
}