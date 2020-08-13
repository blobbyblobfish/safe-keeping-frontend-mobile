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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    scrollView: {
        backgroundColor: '#fff',
        padding: 10
    },
    p: {
        paddingBottom: 5
    },
    h6: {
        fontWeight: 'bold',
        paddingBottom: 15
    },
    diaryCard: {
        paddingLeft: 10,
        paddingBottom: 10
    }
})

export default styles