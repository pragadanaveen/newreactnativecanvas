// src/components/Canvas.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectComponent } from '../redux/builderSlice';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { componentMap } from '../utils/componentMap';

export default function Canvas() {
  const { components, selectedComponentId } = useSelector((state: any) => state.builder);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>React Native Canvas</Text>
      <View style={styles.canvasArea}>
        {components.map(component => {
          const Component = componentMap[component.type];
          return (
            <Pressable
              key={component.id}
              onPress={() => dispatch(selectComponent(component.id))}
              style={[
                styles.componentWrapper,
                selectedComponentId === component.id && styles.selectedComponent
              ]}
            >
              <Component {...component.props} />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  canvasArea: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  componentWrapper: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 4,
  },
  selectedComponent: {
    borderWidth: 2,
    borderColor: 'blue',
    backgroundColor: 'rgba(0, 0, 255, 0.05)',
  }
});