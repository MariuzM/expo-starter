import { Link } from 'expo-router';
import { useEffect } from 'react';

export default function HomePage() {
  // useEffect(() => {
  //   console.log('mounted');
  //   return () => console.log('unmounted');
  // }, []);

  return (
    <>
      <Link href={'/page1'}>Page 1</Link>
    </>
  );
}
