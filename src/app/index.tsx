import { Text, View } from 'react-native'

export default function HomePage() {
	return (
		<View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
			<Text
				style={{
					fontSize: 40,

					// === Works on both Android and iOS
					// fontFamily: 'Figtree',

					// === Works on Android only
					// fontFamily: 'FigtreeBold',

					// === Works on iOS only but on Android i lose font family but still have bold
					fontFamily: 'Figtree',
					fontWeight: 'bold',
				}}
			>
				This is my Font @
			</Text>
		</View>
	)
}
