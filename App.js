import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Navigation from './Navigation/Navigation';
import Navbar from './components/Navbar/Navbar';

export default function App() {

  const [fontsLoaded] = useFonts({
    Ultraf: require("./assets/fonts/Rubik.ttf")
  })

  return (
    // <View style={styles.container}>
    //   <Text style={styles.rubik}>salom</Text>
    //   <Text style={styles.rubik}>salom</Text>
    //   <Text style={styles.rubik}>salom</Text>
    //   <StatusBar style="auto" />
    // </View>
  <>
    {/* <Navbar/> */}
    <Navigation/>
  </>
  );
}