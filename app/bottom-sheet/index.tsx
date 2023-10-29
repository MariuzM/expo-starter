import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import React, { useMemo, useRef } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function BottomSheetPage() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  return (
    <View style={css.container}>
      <Button title="Open Bottom Sheet" onPress={() => bottomSheetRef.current?.expand()} />

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backdropComponent={(props) => (
          <BottomSheetBackdrop {...props} onPress={() => bottomSheetRef.current?.close()} />
        )}
      >
        <View style={css.contentContainer}>
          <Text>Bottom Sheet 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1,
  },
});
