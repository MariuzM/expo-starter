import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function StackPage1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page 1</Text>
      <Link href={{ pathname: '/stack/page2' }}>Go to Page 2</Link>
    </View>
  );
}
