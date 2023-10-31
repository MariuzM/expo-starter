import MapLibreGL from '@maplibre/maplibre-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

// Will be null for most users (only Mapbox authenticates this way).
// Required on Android. See Android installation notes.
MapLibreGL.setAccessToken(null);

export default function MapPage() {
  return (
    <View style={css.page}>
      <MapLibreGL.MapView
        style={css.map}
        logoEnabled={false}
        styleURL="https://demotiles.maplibre.org/style.json"
      />
    </View>
  );
}

const css = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
