import type { ConfigContext, ExpoConfig } from 'expo/config';

/**
 * Dynamic Expo config. Environment is selected via EXPO_PUBLIC_APP_ENV
 * (Stage-16 env model). Marketing `version` is nominal; the authoritative
 * release version/tag is produced by release-please (Stage-19). Native build
 * numbers are managed remotely by EAS (`appVersionSource: remote`).
 */

type AppEnv = 'development' | 'preview' | 'staging' | 'production';

const APP_ENV = (process.env.EXPO_PUBLIC_APP_ENV as AppEnv | undefined) ?? 'development';

const DISPLAY_NAME: Record<AppEnv, string> = {
  development: 'CCN (Dev)',
  preview: 'CCN (Preview)',
  staging: 'CCN (Staging)',
  production: 'CCN',
};

const BUNDLE_ID: Record<AppEnv, string> = {
  development: 'com.ccn.app.dev',
  preview: 'com.ccn.app.preview',
  staging: 'com.ccn.app.staging',
  production: 'com.ccn.app',
};

// Brand splash background; brand splash/icon images are added in the Asset
// Architecture increment (Increment 5), at which point image paths are wired here.
const SPLASH_BACKGROUND = '#0E0E1A';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: DISPLAY_NAME[APP_ENV],
  slug: 'ccn',
  scheme: 'ccn',
  version: '0.0.0',
  orientation: 'portrait',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  runtimeVersion: { policy: 'appVersion' },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: false,
    bundleIdentifier: BUNDLE_ID[APP_ENV],
  },
  android: {
    package: BUNDLE_ID[APP_ENV],
    edgeToEdgeEnabled: true,
  },
  plugins: [['expo-splash-screen', { backgroundColor: SPLASH_BACKGROUND, resizeMode: 'contain' }]],
  experiments: { typedRoutes: false },
  extra: {
    appEnv: APP_ENV,
    eas: { projectId: process.env.EAS_PROJECT_ID },
  },
});
