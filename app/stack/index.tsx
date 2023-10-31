import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function StackPage1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page 1</Text>

      <Link href={{ pathname: '/stack/page2' }} style={css.link}>
        Go to Page 2
      </Link>

      <Link href={{ pathname: '/stack/map' }} style={css.link}>
        Go to Map
      </Link>
    </View>
  );
}

const css = StyleSheet.create({
  link: {
    borderColor: 'blue',
    borderRadius: 5,
    borderWidth: 1,
    color: 'blue',
    margin: 10,
    padding: 10,
  },
});
