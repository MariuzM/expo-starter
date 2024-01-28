import { StyleSheet, Text, View } from 'react-native';

export const BottomSheet = () => {
  return (
    <View style={css.container}>
      <Text>BottomSheet</Text>
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    height: '100%',
  },
  content: {
    padding: 20,
  },
});
