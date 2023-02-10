import React, { useContext } from 'react';
import { AppRegistry } from 'react-native';
import Home from '../screens/Home'
import { NativeRouter, Route, Routes } from 'react-router-native';


const Navigation = () => {

    return (
        <NativeRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
            </Routes>
        </NativeRouter>
    );
};

export default Navigation;
AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)