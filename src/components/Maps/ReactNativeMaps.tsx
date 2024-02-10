import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';

export const ReactNativeMaps = () => {
  return (
    <View style={css.container}>
      <MapView
        userInterfaceStyle="dark"
        provider={PROVIDER_DEFAULT}
        liteMode={false}
        style={css.map}
      />
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: '100%',
    width: '100%',
  },
});
