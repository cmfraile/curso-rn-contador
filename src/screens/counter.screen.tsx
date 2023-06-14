import { useEffect, useState } from "react";
import { Platform, StyleSheet } from "react-native";
import { View , Text , TouchableOpacity , ImageBackground } from "react-native";
import UyTFab from "../components/UyTFab";
import TeacherFab from "../components/Teacherfab";

const hexCallback = () => `#${Math.random().toString(16).slice(2, 8).padStart(6, '0')}`

const ContadorScreen = () => {

    const [ counter , setCounter ] = useState<number>(0);
    const [ hex , setHex ] = useState<string>(hexCallback())

    useEffect(() => setHex(hexCallback()),[counter])

    return(
        <View style={styles.container}>
            <Text style={{...styles.text,color:hex}}> Contador </Text>
            <Text style={styles.text}>{counter}</Text>
            {(false)
                ?
                    <View style={styles.buttonGroup}>
                        <UyTFab pom={false} setCallback={() => setCounter(v => v-1)}/>
                        <UyTFab pom={true} setCallback={() => setCounter(v => v+1)}/>
                    </View>
                :   
                    <View style={styles.buttonGroup}>
                        <TeacherFab pom='minus' setCallback={() => setCounter(v => v-1)} />
                        <TeacherFab pom='plus' setCallback={() => setCounter(v => v+1)} />
                    </View>
            }
            
        </View>
    )

    //return Platform.OS === 'ios' ? ios() : android() ;

}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'space-around',
      alignItems:'center',
    },
    text:{
      fontSize:50,
      minWidth:'100%',
      textAlign:'center',
    },
    buttonGroup:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        maxHeight:60,
        minWidth:'100%',
        maxWidth:'100%',
    },
});

export default ContadorScreen