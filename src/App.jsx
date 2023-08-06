import React, { useEffect, useState } from 'react';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import { Root } from './Routes/root.jsx';
import { routes } from './Routes/routes';
import robotApiHost from './Contexts/robotApiHost.js';
import { usePollingEffect } from './Hooks/usePollingEffect.js';

const router = createBrowserRouter([
    {
        path: '/rdui',
        element: <Root />,
        errorElement: <>404?!</>,
        children: routes
    },
]);


const App = () => {
    const [host, setHost] = useState({ host: null })
    useEffect(() => { console.log(host) }, []);
    return (
        <robotApiHost.Provider value={{ host: host, setRobotApiHost: setHost }}>
            <RouterProvider router={router} fallbackElement={<>Loading...</>} />
        </robotApiHost.Provider>
    )
}

export default App;