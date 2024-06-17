import { Link } from 'expo-router';

import { BottomSheetView } from '../components/BottomSheet';

export default function HomePage() {
  return (
    <>
      {/* <Link href={'/page1'}>Go to Page 1</Link> */}
      <BottomSheetView />
    </>
  );
}
