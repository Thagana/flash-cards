import {  StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60,   
        borderRadius: 30,            
        backgroundColor: '#ee6e73',                                    
        position: 'absolute',                                          
        bottom: 10,                                                    
        right: 10,
        padding: 12
    }
});

export default styles;