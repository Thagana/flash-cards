import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './AddCard.style';

export default function AddCard(props) {
    const [title, setTitle] = React.useState('');
    const [cartigory, setCartigory] = React.useState('');
    const [body, setBody] = React.useState('');

    const handleTitleChange = (value) => {
        setTitle(value.nativeEvent.text);
    }
    const handleCartogoryChange = (value) => {
        setCartigory(value.nativeEvent.text);
    }
    const handleBodyChange = (value) => {
        setBody(value.nativeEvent.text);
    }

    const setItem = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('cards', jsonValue);
            props.navigation.navigate('Home')
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
    const add = async () => {
        try {
            if(!title || !cartigory || !body) return;
            const value = {
                title,
                cartigory,
                body
            }
            const valueArray = await getItem();
            const placeholder = [...valueArray];
            placeholder.push(value)
            await setItem(placeholder);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.conatiner}>
            <View>
                <Text style={styles.header}>
                    Add Card
                </Text>
            </View>
            <View style={styles.from}>
                <View>
                    <TextInput
                        style={styles.textInput}
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="Title"
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        value={cartigory}
                        onChange={handleCartogoryChange}
                        placeholder="Cartigory"
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        value={body}
                        onChange={handleBodyChange}
                        placeholder="Body"
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={add} style={styles.button} activeOpacity={0.8}>
                        <View>
                            <Text style={styles.text}>Add</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
