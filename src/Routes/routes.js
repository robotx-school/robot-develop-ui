import React from 'react';
import { BellOutlined, CodeOutlined, ControlOutlined, FundOutlined, SettingOutlined, ToolOutlined } from '@ant-design/icons';
import { Stats } from '../Pages/Stats';
import { Settings } from '../Pages/Settings';
import { BoardTest } from '../Pages/BoardTest';
import { CTDTerminal } from '../Pages/CTDTerminal';
import { SPITerminal } from '../Pages/SPITerminal';
import { Joystick } from '../Pages/Joystick';
import { Motors } from '../Pages/Motors';
import { Servos } from '../Pages/Servos';

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
    element: <Motors />,
    icon: <BellOutlined />,
    label: 'Motors'
  },
  {
    path: 'servos',
    element: <Servos />,
    icon: <BellOutlined />,
    label: 'Servos'
  },
  {
    path: 'joystick',
    element: <Joystick />,
    icon: <ControlOutlined />,
    label: 'Joystick'
  },
  {
    path: 'spi_terminal',
    element: <SPITerminal />,
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