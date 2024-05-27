import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.myText} >My name is </Text>
      <Text style={styles.boldText}>Mubarak Wumpini Abdul-Rashid</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myText: {
    fontSize: 24,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 24,
  }
});
