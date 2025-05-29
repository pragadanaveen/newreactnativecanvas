// src/components/Sidebar.tsx
import { useDispatch } from 'react-redux';
import { addComponent } from '../redux/builderSlice';
import { Button, View } from 'react-native';

export default function Sidebar() {
  const dispatch = useDispatch();

  return (
    <View>
      <Button
        title="Add Text"
        onPress={() => dispatch(addComponent({ type: 'RNText', props: { children: 'New Text' } }))}
      />
      <Button
        title="Add View"
        onPress={() => dispatch(addComponent({ type: 'RNView' }))}
      />
    </View>
  );
}
