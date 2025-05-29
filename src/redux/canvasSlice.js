// src/redux/canvasSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ComponentItem {
  id: string;
  type: string;
  props: Record<string, any>;
}

interface CanvasState {
  components: ComponentItem[];
  selectedComponentId: string | null;
}

const initialState: CanvasState = {
  components: [],
  selectedComponentId: null,
};

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    addComponent: (state, action: PayloadAction<ComponentItem>) => {
      state.components.push(action.payload);
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

export const { addComponent, selectComponent, updateComponentProps } = canvasSlice.actions;
export default canvasSlice.reducer;
