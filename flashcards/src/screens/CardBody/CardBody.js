import React from 'react'
import { View,  Platform, KeyboardAvoidingView } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './CardBody.style';

export default function CardBody({ route, navigation }) {
    const { title, cartigory, imageSrc } = route.params
    const [body, setBody] = React.useState('');
    const [content, setContent] = React.useState([])

    const handleChange = (value) => {
        setBody(value.nativeEvent.text)
    }
    const add = () => {
        const placeholder = [...content, body];
        setContent(placeholder);
        setBody('');
    }
    const setItem = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('data', jsonValue);
          } catch (e) {
            console.log(e)
          }
    }
    const getItem = async () => {
        try {
            const cards = await AsyncStorage.getItem('data');
            if (cards !== null){
                return JSON.parse(cards);
            }
            return [];
        } catch (error) {
            console.log(error);
        }
    }
    const save = async () => {
        if(content.length === 0) return;
        
        const cartigoryTrim = cartigory.toLowerCase();

        const meta = {
            imageSrc,
            title,
            cartigory: cartigoryTrim,
            content,
        }
        const data = await getItem();
        console.log(data);
        const placeholder = [...data, meta]
        await setItem(placeholder);
        navigation.navigate("Home");
    }
    return (
        <View style={styles.conatiner}>
            <ScrollView>
                <View style={styles.richeditorConatiner}>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'please input content'}
                            onChange={handleChange}
                            value={body}
                        />
                </View>
            </ScrollView>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <TouchableOpacity style={styles.button} onPress={add} activeOpacity={0.8}>
                            <Ionicons name="add" size={40} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={save} activeOpacity={0.8}>
                            <Ionicons name="md-save" size={30} color="#fff" />
                        </TouchableOpacity>
                </KeyboardAvoidingView>
        </View>
    )
}
