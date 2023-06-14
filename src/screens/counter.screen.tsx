import { useState } from "react";
import { StyleSheet } from "react-native";
import { View , Text , TouchableOpacity , ImageBackground } from "react-native";

const CustomFab = ({pom,setCallback}:{pom:boolean,setCallback:() => void}) => {

    const getSource = (pom)
    ? require('../assets/tora.png')
    : require('../assets/ushio.png')

    return(
        <TouchableOpacity onPress={setCallback} style={styles.customfab}>
            <ImageBackground source={getSource} style={styles.backgroundImage}>
                <Text style={styles.fabText}>{`${(pom) ? '+1' : '-1'}`}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )

}

const ContadorScreen = () => {

    const [ counter , setCounter ] = useState<number>(0);

    return(
        <View style={styles.container}>
            <Text style={styles.text}> Contador </Text>
            <Text style={styles.text}>{counter}</Text>
            <View style={styles.buttonGroup}>
                <CustomFab pom={false} setCallback={() => setCounter(v => v-1)}/>
                <CustomFab pom={true} setCallback={() => setCounter(v => v+1)}/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'space-around',
      alignItems:'center',
      backgroundColor:'grey'
    },
    text:{
      fontSize:50,
      minWidth:'100%',
      textAlign:'center',
      backgroundColor:'pink'
    },
    customfab:{
        width:100,
        minHeight:100,
        padding:15,
        borderRadius:50,
        overflow:'hidden'
    },
    buttonInFab:{
        minWidth:'100%',
        minHeight:'100%',
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover',
        justifyContent:'center',
        overflow:'hidden'
    },
    buttonGroup:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        maxHeight:60,
        minWidth:'100%',
        maxWidth:'100%',
    },
    fabText:{
        color:'red',
        fontWeight:'700',
        fontSize:30,
        textAlign:'center',
    }
});

export default ContadorScreen