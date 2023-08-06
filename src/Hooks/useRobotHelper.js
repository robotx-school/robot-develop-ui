import robotApiHost from '../Contexts/robotApiHost';
import React, { useContext, useEffect, useState } from 'react';


export const useRobotHelper = () => {
    const {host, } = useContext(robotApiHost);
    
    const robotHost = () => console.log(host.host);
    return {robotHost};
  }
  