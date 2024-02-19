import { Link } from 'expo-router';
import { useEffect } from 'react';
import { Text } from 'react-native';

export default function Page1() {
  useEffect(() => {
    console.log('mounted');
    return () => console.log('unmounted');
  }, []);

  return (
    <>
      <Link href={'/page2'}>Page 2</Link>
    </>
  );
}
