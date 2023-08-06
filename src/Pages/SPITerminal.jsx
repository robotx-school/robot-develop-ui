import React from "react";
import { Card } from 'antd';
import { Terminal } from "../Components/Terminal";

export const SPITerminal = () => {
    return (
        <>
            <Card title={"SPI Terminal"} style={{ height: "100%" }}>
                <Terminal sendFunction={(cmd) => { console.log(cmd) }} initialCommands={[]} serverPromptName="SPI:>" inputPlaceholder="[0,0,0,0,0,0,0,0,0,0]" autoCommands={[{ command: "[]", title: "Empty buffer", tooltip: "Empty command, no action, used for status check" }, { command: "[0,0,0,0,0,0,0,0,0,0]", title: "Zero buffer", tooltip: "10 zeros buffer" }]} />
            </Card>
        </>
    )
}