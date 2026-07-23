import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Platform root placeholder. This renders only a neutral boot surface so the
 * native platform is verifiably running. The real bootstrap pipeline
 * (splash orchestration, provider composition, error boundary, navigation
 * init) is introduced in Increment 3.
 */
export function App(): React.JSX.Element {
  return (
    <View style={styles.container} accessible accessibilityLabel="CCN platform initializing">
      <StatusBar style="auto" />
      <Text style={styles.text}>CCN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0E0E1A',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
  },
});
