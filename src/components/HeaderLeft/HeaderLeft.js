import { useStoreActions } from 'easy-peasy';
import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Modal from 'react-native-modal';
import styles from './HeaderLeft.style';

export default function HeaderLeft() {
    const [open, setOpen] = React.useState(false);
    const openModal = () => {
        setOpen(!open)
    }
    const handleDeleteAll = () => {

    }
    return (
        <TouchableOpacity style={styles.container} onPress={openModal} coverScreen={true}>
            <Ionicons name="md-options" size={27} color="#000" />
            <Modal isVisible={open} style={styles.modal}>
                <View style={styles.modalContainer}>
                    <View>
                        <TouchableOpacity onPress={handleDeleteAll} style={styles.options}>
                            <View>
                                <Text style={styles.deleteText}>
                                    Delete All
                                </Text>
                            </View>
                            <View>
                                <Ionicons name="md-trash-outline" size={26} color="red" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.options}>
                            <View>
                                <Text style={styles.mode}>
                                    Dark Mode
                                </Text>
                            </View>
                            <View>
                                <Ionicons name="md-sunny-sharp" color="orange" size={26} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={openModal} style={styles.closeBtnContainer}>
                            <Text style={styles.closeBtn}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </TouchableOpacity>
    )
}
