import React from 'react';
import { BellOutlined, CodeOutlined, ControlOutlined, FundOutlined, SettingOutlined, ToolOutlined } from '@ant-design/icons';
import { Stats } from '../Pages/Stats';
import { Settings } from '../Pages/Settings';
import { BoardTest } from '../Pages/BoardTest';
import { CTDTerminal } from '../Pages/CTDTerminal';


export const routes = [
  {
    index: true,
    path: '',
    element: <Stats />,
    icon: <FundOutlined />,
    label: 'Status',
  },
  {
    path: 'motors',
    element: <>Motors Page placeholder</>,
    icon: <BellOutlined />,
    label: 'Motors'
  },
  {
    path: 'servos',
    element: <>Servos Page placeholder</>,
    icon: <BellOutlined />,
    label: 'Servos'
  },
  {
    path: 'joystick',
    element: <>Joystick Page placeholder</>,
    icon: <ControlOutlined />,
    label: 'Joystick'
  },
  {
    path: 'spi_terminal',
    element: <>SPI Terminal Page placeholder</>,
    icon: <CodeOutlined />,
    label: 'SPI Terminal'
  },
  {
    path: 'ctd_terminal',
    element: <CTDTerminal />,
    icon: <CodeOutlined />,
    label: 'CTD Terminal'
  },
  {
    path: 'board_test',
    element: <BoardTest />,
    icon: <ToolOutlined />,
    label: 'Board test'
  },
  {
    path: 'settings',
    element: <Settings />,
    icon: <SettingOutlined />,
    label: 'RDUI Settings'
  },


];