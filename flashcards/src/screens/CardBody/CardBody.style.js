import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    richeditorConatiner: {
        flex: 1
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60,   
        borderRadius: 30,            
        backgroundColor: '#ee6e73',                                    
        bottom: 10,                                                    
        left: 330,
        padding: 12,
        margin: 2
    },
    fab: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    textInput: {
        width: 400,
        height: 40,
        borderColor: '#000',
        borderWidth: 2,
        marginHorizontal: 5,
        marginTop: 5,
        marginBottom: 5
    }
});

export default styles;