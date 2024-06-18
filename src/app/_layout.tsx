import { Stack } from 'expo-router';
import { create } from 'zustand';

export const useState = create(() => {
  return {
    isTrue: false,
  };
});

export default function RootLayout() {
  return (
    <>
      <Stack />
    </>
  );
}
