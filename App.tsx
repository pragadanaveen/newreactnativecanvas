import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Canvas from './src/screens/Canvas'; // we’ll create this soon

export default function App() {
  return (
    <Provider store={store}>
      <Canvas />
    </Provider>
  );
}
