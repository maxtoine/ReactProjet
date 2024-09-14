import { React, useState } from 'react';
import { Text} from 'react-native';
import buttonStyle from './ButtonStyle';
function Box({ props }) {

    const [x, setX] = useState(props.button.X)
    const [y, setY] = useState(props.button.Y)
    const [id, setId] = useState(props.button.id)
    
    console.log(x, y)

    return (
        <Text style={[
            buttonStyle.button,
            {left : x , top : y}
        ]}> hello world</Text>
    );
}

export default Box


