// Gesture Handler must be imported before anything else at the entry point.
import 'react-native-gesture-handler';

import { registerRootComponent } from 'expo';

import { App } from './src/App';

// registerRootComponent wraps App with the correct native root and handles
// AppRegistry for both Expo Go and native builds.
registerRootComponent(App);
