import { View } from 'react-native';

// composant 
import { Listprovider } from '../../Context/ListContext';
import { GestureDetectorPoint } from '../../TachGesture/BoxGesture';
import RenderPoint from '../RenderPoint/RenderPoint';

//import Style 
import style from '../Point/style';


const Point = () =>  (

    <Listprovider>
    <GestureDetectorPoint>
      <View style = {style.main}>
        <RenderPoint/>
      </View>
    </GestureDetectorPoint>
  </Listprovider>
)


export default Point