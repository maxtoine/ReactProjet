import {React, useContext, useMemo}from 'react';
import Box from '../Box/box';
import { ListContext } from '../../Context/ListContext';



function RenderPoint()
{
  const dataList = useContext(ListContext)

  return dataList && dataList.length > 0 ? ( dataList.map( Value => <Box key={Value.button.id} props={Value}/>)) : null
}

export default RenderPoint