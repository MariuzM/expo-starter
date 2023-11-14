import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { FlatList, Platform, TextInput, View } from 'react-native';
import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { initialWindowMetrics } from 'react-native-safe-area-context';

export default function HomePage() {
  const { height } = useReanimatedKeyboardAnimation();
  const tabBarHeight = useBottomTabBarHeight();

  const bottomInset = (Platform.OS === 'android' && initialWindowMetrics?.insets.bottom) || 0;
  console.log('🚀 ~ bottomInset:', bottomInset);

  const fakeView = useAnimatedStyle(() => {
    return {
      height: Math.abs(height.value) - tabBarHeight + bottomInset,
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        inverted
        data={data}
        renderItem={() => {
          return <View style={{ backgroundColor: 'red', height: 50, margin: 12 }} />;
        }}
      />

      <TextInput style={{ backgroundColor: 'green', height: 50, margin: 12 }} />
      <Animated.View style={[fakeView, { backgroundColor: 'blue' }]} />
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
