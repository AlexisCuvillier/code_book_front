import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './components/Navigation.js';

class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar hidden={true} />
        <Navigation />
      </>
    )
  }
}
export default App