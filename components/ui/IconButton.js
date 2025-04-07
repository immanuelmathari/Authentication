import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, color, size, onPressOut }) {
  return (
    <View>
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPressOut = {onPressOut}
    >
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
    </View>

  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.7,
  },
});