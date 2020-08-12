import { StyleSheet, Dimensions } from 'react-native'

const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        backgroundColor: '#fff'
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