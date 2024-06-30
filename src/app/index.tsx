import { router } from 'expo-router';
import { Button } from 'react-native';

export default function HomePage() {
  return (
    <>
      <Button title="Go to Page 1" onPress={() => router.push('/page1')} />
    </>
  );
}
