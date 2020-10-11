import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 10
    },
    closeBtn: { 
            color: '#fff', 
            fontFamily: 'SansitaSwashed-Regular', 
            padding: 5,
            fontSize: 20
        },
    closeBtnContainer: { 
            flexDirection: 'row', 
            justifyContent: "center", 
            backgroundColor: '#ee6e73', 
            width: 200, 
            height: 40, 
            borderRadius: 20 
        },
    modalContainer: { 
                flex: 1, 
                backgroundColor: '#fff',
                justifyContent: "center",
                alignItems: "center"
            },
    modal: {
        height: 400,
        width: 360
    },
    options: {
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: "center"
    },
    deleteText: {
        fontFamily: 'SansitaSwashed-Regular',
        fontSize: 20,
        margin: 10
    },
    mode: {
        fontFamily: 'SansitaSwashed-Regular',
        fontSize: 20,
        margin: 10
    }
});


export default styles;