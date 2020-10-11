import React from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useStoreActions } from 'easy-peasy';

import styles from './AddCard.style';
export default function AddCard(props) {
    const [title, setTitle] = React.useState('');
    const [cartigory, setCartigory] = React.useState('');
    const [imageSrc, setImageSrc] = React.useState(null);
    const setFirstComplate = useStoreActions((action) => action.setFirstComplate);

    const handleTitleChange = (value) => {
        setTitle(value.nativeEvent.text);
    }
    const handleCartogoryChange = (value) => {
        setCartigory(value.nativeEvent.text);
    }
    const handleSelectImage = () => {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
              skipBackup: true,
            },
          };
          ImagePicker.showImagePicker(options, response => {
      
            if (response.didCancel) {
              console.log('User cancelled photo picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
                let source = { uri: 'data:image/jpeg;base64,' + response.data };
                setImageSrc(source.uri);
            }
          });
    }


    const next = async () => {
        try {
            if(!title || !cartigory) return;
            setFirstComplate();
            props.navigation.navigate('Card Body', { title, cartigory, imageSrc })
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
            <View style={[styles.image, styles.imageDisplay, {  marginBottom: 20 }]}>
                { imageSrc !== null && <Image source={{ uri: imageSrc}} style={styles.image}/>}
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
                <View style={styles.cameraIcon}>
                    <TouchableOpacity onPress={handleSelectImage} activeOpacity={0.8}>
                         <Ionicons name="md-camera-outline" size={30} color="#000" />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={next} style={styles.button} activeOpacity={0.8}>
                        <View>
                            <Text style={styles.text}>Next</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
