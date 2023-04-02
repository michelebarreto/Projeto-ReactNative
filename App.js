
import { StatusBar, SafeAreaView, View} from 'react-native';
import {useFonts, Montserrat_400Regular,Montserrat_700Bold, Montserrat_400Regular_Italic} from '@expo-google-fonts/montserrat'
import Cesta from './src/pages/Cesta';

export default function App() {
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
    "MontserratItalic": Montserrat_400Regular_Italic
  })
  
  if (!fontCarregada) {
    return <View/>
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />

    </SafeAreaView>
  );
}

