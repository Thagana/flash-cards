import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 10,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 10,
        width: width - 18,
        elevation: 5,
    },
    imageConatiner: {
        padding: 5
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    title: {
        paddingHorizontal: 10,
        fontFamily: 'SansitaSwashed-Bold',
        fontSize: 20,
        color: '#000'
    },
    cartigory: {
        color: '#000',
        fontFamily: 'SansitaSwashed-Light',
        paddingHorizontal: 10
    }
});

export default styles;