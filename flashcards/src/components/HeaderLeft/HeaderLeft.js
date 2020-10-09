import React from 'react'
import { TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './HeaderLeft.style';

export default function HeaderLeft() {
    return (
        <TouchableOpacity style={styles.container} onPress={() => {}}>
            <Ionicons name="md-options" size={27} color="#000" />
        </TouchableOpacity>
    )
}
