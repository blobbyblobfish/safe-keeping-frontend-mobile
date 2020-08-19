import { StyleSheet, Dimensions } from 'react-native'

const dimensions = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontalContainer: {
        flexGrow: 1,
        width: dimensions.width * 1.5,
        height: dimensions.height * .3,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    smallHorizontalContainer: {
        flexGrow: 1,
        width: dimensions.width * 1.5,
        height: dimensions.height * .1,
        marginTop: 200,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    scrollView: {
        backgroundColor: '#fff',
        padding: 10
    },
    profileScrollView: {
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
        height: dimensions.height
    },
    p: {
        marginBottom: 5
    },
    h6: {
        fontWeight: 'bold',
        marginBottom: 15
    },
    multiline: {
        width: 300,
        height: 100
    },
    diaryCard: {
        paddingLeft: 10,
        paddingBottom: 10
    },
    button: {
        backgroundColor: 'white',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    buttonContainer: {
        height: dimensions.height / 3,
        justifyContent: 'center'
    },
    textInput: { 
        height: 50, 
        borderRadius: 25,
        borderWidth: 0.5,
        marginHorizontal: 20,
        paddingLeft: 10,
        marginVertical: 5,
        borderColor: 'rgba(0,0,0,0.2)'
    }
})

export default styles