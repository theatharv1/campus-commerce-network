import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Temporary platform placeholder rendered by the root navigator. It exists only
 * to prove the shell (providers → navigation → themed screen) renders. It is
 * replaced by the real navigator hierarchy and feature screens in later
 * increments/stages — it is not a business/feature screen.
 */
export function ShellPlaceholder(): React.JSX.Element {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>CCN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
  },
});
