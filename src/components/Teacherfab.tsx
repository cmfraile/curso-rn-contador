import { StyleSheet, Text, TouchableNativeFeedback , View } from "react-native";

const TeacherFab = ({pom,setCallback}:{pom:'minus'|'plus',setCallback:() => void}) => {

    return(
        <View style={style.container}>
            <TouchableNativeFeedback 
                onPress={setCallback}
                background={TouchableNativeFeedback.Ripple('red',true,100)}
            >
                <Text style={style.button}>
                    { (pom == 'minus') && '-1'}
                    { (pom == 'plus') && '+1'}
                </Text>
            </TouchableNativeFeedback>
        </View>
    )

}

const { superFlex } = StyleSheet.create({
    superFlex:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

const style = StyleSheet.create({
    container:{
        ...superFlex,
        borderRadius:100,
        minWidth:60,
        maxWidth:60,
        backgroundColor:'lightgrey',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    button:{
        fontWeight:'900',
        color:'black',
        fontSize:20
    }
})

export default TeacherFab

