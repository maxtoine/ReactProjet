import { useContext } from 'react';
import { GestureDetector, Gesture} from 'react-native-gesture-handler';
import { ListDispatchContext, ListContext } from '../Context/ListContext';

// probléme de coordonne 

export function GestureDetectorPoint({children}){

    const list = useContext(ListContext)
    const dispatch = useContext(ListDispatchContext)

    const  doubleTach =  Gesture.Tap().numberOfTaps(2).onEnd((_event, sucess) =>
    {
        if(sucess)
        { 
          dispatch({
            type : 'add',
            button : {
              id: list.length,
              X: parseInt(_event.absoluteX),
              Y: parseInt(_event.absoluteY)
            }
            
          })  
        }  
    })
  
    return(
      <GestureDetector gesture={doubleTach}>
        {children}
      </GestureDetector>
    )
  }
  