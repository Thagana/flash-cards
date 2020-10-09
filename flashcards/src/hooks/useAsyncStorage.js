import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

async function getSavedValue(key, initialValue){
    const savedValue = JSON.parse(await AsyncStorage.getItem(key));
    if(savedValue) return savedValue;

    if(initialValue instanceof Function) return initialValue()

    return initialValue;
}

export default function useAsyncStorage(key, initialValue) {
    const [value, setValue] = React.useState(() => {
        return getSavedValue(key, initialValue);
    });

    async function setItem(){
        await AsyncStorage.setItem(key, JSON.stringify(value))
    }
    React.useEffect(() => {
        setItem();
    },[setItem])
    return [value, setValue]
}