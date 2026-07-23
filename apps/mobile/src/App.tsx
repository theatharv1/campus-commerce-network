import { darkTheme, lightTheme } from '@ccn/ui';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { toNavigationTheme } from './shell/navigation-theme';
import { RootNavigator } from './shell/RootNavigator';

/**
 * Root application shell and provider hierarchy.
 *
 *   GestureHandlerRootView   (gesture system root — must wrap everything)
 *     SafeAreaProvider       (safe-area insets for all screens)
 *       NavigationContainer  (navigation tree + design-system theme bridge)
 *         RootNavigator
 *
 * The system color scheme selects the theme statically for now; the full theme
 * runtime (preference store + persistence, Stage 3 · Increment 2) plugs into
 * this same position without changing the shell's shape.
 */
export function App(): React.JSX.Element {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer theme={toNavigationTheme(theme)}>
          <StatusBar style={theme.mode === 'dark' ? 'light' : 'dark'} />
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
