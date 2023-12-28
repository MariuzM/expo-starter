import { Text, View } from 'react-native';

export default function HomePage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Text style={{ fontFamily: 'Angelina', fontSize: 30 }}>Inter Black</Text>
    </View>
  );
}
