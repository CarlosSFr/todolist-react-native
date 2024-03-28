import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';
import { useFonts, Inter_700Bold, Inter_400Regular, Inter_900Black } from "@expo-google-fonts/inter"
import AppLoading from "expo-app-loading";

export default function App() {
//   const [ fontsLoaded ] = useFonts({
//     Inter_400Regular,
//     Inter_700Bold,
//     Inter_900Black,
// })
// if(!fontsLoaded){
//     <AppLoading />
// }

  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}
