import { router } from 'expo-router';
import { Button, Text } from 'react-native';

import { useState } from './_layout';

export default function HomePage() {
  const isTrue = useState((s) => s.isTrue);

  return (
    <>
      <Button title="Go to Page 1" onPress={() => router.push('/page1')} />
      <Text>{isTrue.toString()}</Text>
    </>
  );
}
