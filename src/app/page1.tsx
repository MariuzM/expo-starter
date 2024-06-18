import { Button, Text } from 'react-native';

import { useState } from './_layout';

export default function Page1() {
  const isTrue = useState((s) => s.isTrue);

  // useEffect(() => {
  //   console.log('Page 1 mounted');
  //   return () => console.log('Page 1 unmounted');
  // }, []);

  return (
    <>
      <Button title="Change state to true" onPress={() => useState.setState({ isTrue: !isTrue })} />
      <Text>{isTrue.toString()}</Text>
    </>
  );
}
