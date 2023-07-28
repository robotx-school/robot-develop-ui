import React from "react";
import { Row, Col, Card } from 'antd';
import { Terminal } from "../Components/Terminal";


export const CTDTerminal = () => {
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
                        <Terminal sendFunction={(cmd) => {console.log(cmd)}} initialCommands={["CTD_HELLO"]} serverPromptName="CTD:>"/>
                    </Card>
                </Col>
            </Row>

        </>
    )
}