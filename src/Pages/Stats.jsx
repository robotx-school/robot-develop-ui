import { Space, Typography, Table, Card } from 'antd';
import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { UsageLiquid } from '../Components/UsageLiquid';
import { TemperatureBullet } from '../Components/TemperatureBullet';

const { Text } = Typography;

export const Stats = () => {
    let color_theme = "light";
    const [cpuUsage, SetCpuUsage] = useState(0.1);
    const [ramUsage, SetRamUsage] = useState(0.13);
    const [sdUsage, SetSdUsage] = useState(0.29);
    const [cpuTemperature, SetCpuTemperature] = useState(0);
    const API_URL = "http://localhost:8000"; // FIXIT

    const setStats = () => {
        axios({ method: "GET", url: `${API_URL}/stats` }).then((response) => {
            SetCpuUsage(response.data.cpu_usage);
            SetRamUsage(response.data.ram_usage);
            SetSdUsage(response.data.sd_usage);
            SetCpuTemperature(response.data.cpu_temperature);
        }).catch((response) => {
            console.error("Can't get data");
        });
    }

    useEffect(() => { setStats() }, [])
    const RpiTableData = [
        {
            key: 'local_ip',
            item: 'Local IP',
            value: 'N/A'
        },
        {
            key: 'auth_data',
            item: 'SSH Auth data',
            value: 'pi:pi'
        },
        {
            key: 'hl_api_ver',
            item: 'High-Level API version',
            value: '0.0.1'
        },
        {
            key: 'ros_status',
            item: 'ROS reports',
            value: 'N/A'
        },
        {
            key: 'll_connection',
            item: 'Low-Level SPI connection',
            value: 'Failed (init packet control sum based check)'
        },

    ];

    const RpiTableColumns = [
        {
            title: 'Item',
            dataIndex: 'item',
            key: 'item',
            render: (_, record) => (
                <Text strong>{record.item}</Text>
            )
        },
        {
            title: 'Value',
            dataIndex: 'value',
            key: 'value',
        },
    ];


    return (
        <Card title="SBC status" style={{ height: "100%" }}>
            <Space direction='horizontal' size='large' style={{ width: '100%', justifyContent: 'center', marginBottom: 40 }}>
                <UsageLiquid percent={cpuUsage} color={"#8BC34A"} title={"CPU"} theme={color_theme} />
                <UsageLiquid percent={ramUsage} color={"#4ac387"} title={"RAM"} theme={color_theme} />
                <UsageLiquid percent={sdUsage} color={"#c34a4a"} title={"SD"} theme={color_theme} />
            </Space>
            <Text strong>CPU temperature</Text>
            <TemperatureBullet current={cpuTemperature} />
            <Table dataSource={RpiTableData} columns={RpiTableColumns} />
        </Card>
    );
};