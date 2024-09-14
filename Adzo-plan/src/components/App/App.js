// Import Recat
import { React} from 'react';
import {View} from 'react-native';
import { GestureHandlerRootView} from 'react-native-gesture-handler';

//import Style 
import style from './style';

// composant 
import { Listprovider } from '../../Context/ListContext';
import { GestureDetectorPoint } from '../../TachGesture/BoxGesture';
import RenderPoint from '../RenderPoint/RenderPoint';


function App() {
  return (
    <GestureHandlerRootView>
      <Listprovider>
        <GestureDetectorPoint>
          <View style = {style.main}>
            <RenderPoint/>
          </View>
        </GestureDetectorPoint>
      </Listprovider>
    </GestureHandlerRootView>
  );
}


export default App
