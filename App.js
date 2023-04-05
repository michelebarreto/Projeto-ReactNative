
import { StatusBar, SafeAreaView} from 'react-native';
import {useFonts, Montserrat_400Regular,Montserrat_700Bold, Montserrat_400Regular_Italic} from '@expo-google-fonts/montserrat'
import Cesta from './src/pages';
import moks from './src/moks/cesta';
import AppLoading from 'expo-app-loading';



export default function App() {
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
    "MontserratItalic": Montserrat_400Regular_Italic
  })
  
  if (!fontCarregada) {
    return <AppLoading/>
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar />
      <Cesta {...moks}/>

    </SafeAreaView>
  );
}

