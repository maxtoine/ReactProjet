import { createContext, useReducer} from "react";


export const ListContext = createContext(null);
export const ListDispatchContext = createContext(null);


export function Listprovider({children})
{

    const [list, dispatch] = useReducer(
        listReducer,
        []
      );

    return (
        <ListContext.Provider value={list}>
          <ListDispatchContext.Provider value={dispatch}>
            {children}
          </ListDispatchContext.Provider>
        </ListContext.Provider>
      );
}


// cree un fonction qui controle l'objet 
function listReducer(List, action){

    switch(action.type)
    {
        case 'add': return [...List, { button : action.button, box : {} } ];
    }

}

