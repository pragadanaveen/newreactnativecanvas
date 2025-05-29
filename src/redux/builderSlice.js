// src/redux/builderSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface ComponentItem {
  id: string;
  type: string;
  props: Record<string, any>;
}

interface BuilderState {
  components: ComponentItem[];
  selectedComponentId: string | null;
}

const initialState: BuilderState = {
  components: [],
  selectedComponentId: null,
};

const builderSlice = createSlice({
  name: 'builder',
  initialState,
  reducers: {
    addComponent: (state, action: PayloadAction<{ type: string; props?: any }>) => {
      state.components.push({
        id: uuidv4(),
        type: action.payload.type,
        props: action.payload.props || {},
      });
    },
    selectComponent: (state, action: PayloadAction<string | null>) => {
      state.selectedComponentId = action.payload;
    },
    updateComponentProps: (
      state,
      action: PayloadAction<{ id: string; props: Record<string, any> }>
    ) => {
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
