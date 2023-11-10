import { TextInput, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

export default function HomePage() {
  const { height } = useReanimatedKeyboardAnimation();

  const fakeView = useAnimatedStyle(() => {
    return {
      backgroundColor: 'blue',
      height: Math.abs(height.value),
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        inverted
        data={data}
        renderItem={() => {
          return (
            <View
              style={{
                backgroundColor: 'red',
                height: 50,
                margin: 12,
              }}
            />
          );
        }}
      />
      <TextInput
        style={{
          backgroundColor: 'green',
          height: 50,
          margin: 12,
        }}
      />
      <Animated.View style={fakeView} />
    </View>
  );
}

const data = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
  { id: '8' },
  { id: '9' },
  { id: '10' },
];
