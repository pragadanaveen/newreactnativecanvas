// src/redux/builderSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  components: [
    {
      id: uuidv4(),
      type: 'RNText',
      props: { children: 'Welcome to React Native Builder' }
    },
    {
      id: uuidv4(),
      type: 'RNButton',
      props: { title: 'Click Me' }
    }
  ],
  selectedComponentId: null,
};

const builderSlice = createSlice({
  name: 'builder',
  initialState,
  reducers: {
    addComponent: (state, action) => {
      state.components.push({
        id: uuidv4(),
        type: action.payload.type,
        props: action.payload.props || {},
      });
    },
    selectComponent: (state, action) => {
      state.selectedComponentId = action.payload;
    },
    updateComponentProps: (state, action) => {
      const index = state.components.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.components[index].props = {
          ...state.components[index].props,
          ...action.payload.props,
        };
      }
    },
  },
});

export const { addComponent, selectComponent, updateComponentProps } = builderSlice.actions;
export default builderSlice.reducer;