// src/components/Canvas.tsx
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { selectComponent } from '../redux/builderSlice';
import { View, Text, Pressable } from 'react-native';
import { componentMap } from '../utils/componentMap';

export default function Canvas() {
  const { components, selectedComponentId } = useSelector((state: RootState) => state.builder);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {components.map(component => {
        const Component = componentMap[component.type];
        return (
          <Pressable
            key={component.id}
            onPress={() => dispatch(selectComponent(component.id))}
            style={{
              borderWidth: selectedComponentId === component.id ? 2 : 0,
              borderColor: 'blue',
              marginBottom: 10,
            }}
          >
            <Component {...component.props} />
          </Pressable>
        );
      })}
    </View>
  );
}
