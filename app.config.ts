import type { ExpoConfig } from 'expo/config';

const BUNDLE_IDENTIFIER = 'com.mariusdotdev.expostarterapp';
const VERSION = '1.0.0';
const BUILD_NUMBER = '1';
const BACKGROUND_COLOR = '#fb00ff';

export default (): ExpoConfig => {
  return {
    name: 'Expo Starter App',
    slug: 'expo-starter-app',
    version: VERSION,
    orientation: 'portrait',
    icon: './assets/icon.png',

    userInterfaceStyle: 'light',

    // backgroundColor: BACKGROUND_COLOR,
    // primaryColor: 'green',

    splash: {
      // image: './assets/splash.png',
      // resizeMode: 'cover',
      backgroundColor: BACKGROUND_COLOR,
    },

    assetBundlePatterns: ['**/*'],
    platforms: ['ios', 'android'],

    ios: {
      bundleIdentifier: BUNDLE_IDENTIFIER,
      runtimeVersion: VERSION,
      buildNumber: BUILD_NUMBER,
      supportsTablet: true,
      infoPlist: {},
    },

    android: {
      package: BUNDLE_IDENTIFIER,
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },

    web: {
      favicon: './assets/favicon.png',
    },

    extra: {
      eas: {
        projectId: '3ef33f6d-ada0-4486-89a1-b1057dd54552',
      },
    },
  };
};
