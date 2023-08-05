import React from "react";
import { Card } from 'antd';
import { Terminal } from "../Components/Terminal";

export const SPITerminal = () => {
    const BUF_SIZE = 10;
    return (
        <>
            <Card title={"SPI Terminal"} style={{ height: "100%" }}>
                <Terminal sendFunction={(cmd) => { console.log(cmd) }} initialCommands={[]} serverPromptName="SPI:>" inputPlaceholder="[0,0,0,0,0,0,0,0,0,0]" autoCommands={[{ command: "[]", title: "Empty buffer" }]} />
            </Card>

        </>
    )
}