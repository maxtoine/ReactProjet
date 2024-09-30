// Import Recat
import { React} from 'react';
import { GestureHandlerRootView} from 'react-native-gesture-handler';
import Point from '../Point/Point';
import Pdf from 'react-native-pdf';



function App() {
  return (
    <GestureHandlerRootView>
      <Pdf/>
    </GestureHandlerRootView>
  );
}


export default App
