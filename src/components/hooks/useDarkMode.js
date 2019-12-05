import { useEffect} from 'react';
import {useLocalStorage }from './useLocalStorage';
import { classBody } from '@babel/types';



export function useDarkMode(key, initialValue) {
   
    const [ myValue, setMyValue] = useLocalStorage(key, initialValue);

    useEffect(() => {
     if (myValue) 
        document.querySelector('body').classList.add('dark-mode')
    else 
    document.querySelector('body').classList.remove('dark-mode')

    },[myValue])
    
    return [myValue, setMyValue];

}
