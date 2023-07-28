import React from "react";
import { Card } from 'antd';
import { Terminal } from "../Components/Terminal";

export const SPITerminal = () => {
    return (
        <>
            <Card title={"SPI Terminal"} style={{ height: "100%" }}>
                <Terminal sendFunction={(cmd) => { console.log(cmd) }} initialCommands={[]} serverPromptName="SPI:>" />
            </Card>

        </>
    )
}