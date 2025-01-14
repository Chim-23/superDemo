import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

//ThemedText,ThemedView自定义Text与View标签(button select等都可以单独定义)

export default function ProfileScreen() {
  return (
    <ThemedView><ThemedText>ProfileScreen</ThemedText></ThemedView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
