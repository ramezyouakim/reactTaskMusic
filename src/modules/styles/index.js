import { StyleSheet } from 'react-native';
import values from '../values';
import colors from '../colors'

/**Global Style Sheet */
export default styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center'
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    cardContainer: {
        backgroundColor: colors.white,
        margin: values.mainMargin1,
        marginBottom:0
    },
    cardImageContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardImage: {
        flex: 2,
        resizeMode:'cover',
        height: values.mainImage
    },
    iconImage: {
        width: values.iconImage,
        height: values.iconImage
    },
    cardInfoContainer: {
        flex: 2,
        justifyContent:'center',
        margin: values.mainMargin2,
    },
    cardInfoTextHeader: {
        fontWeight:values.bold,
        fontSize:values.header,
        marginBottom:values.mainMargin1
    },
    cardInfoTextSubHeader: {

    },
    shadowBox: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    loading:{
        flex:1,
        backgroundColor: colors.white,
        justifyContent:'center',
        alignItems:'center'
    },
    loadingBottom:{
        marginTop:values.mainMargin1,
        marginBottom:values.mainMargin1
    }
})