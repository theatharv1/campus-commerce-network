import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ShellPlaceholder } from './ShellPlaceholder';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Root navigator. Increment 1 registers a single shell route; the auth/tabs/
 * modal hierarchy is introduced in Increment 2.
 */
export function RootNavigator(): React.JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Shell" component={ShellPlaceholder} />
    </Stack.Navigator>
  );
}
