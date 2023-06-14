import { TouchableOpacity , ImageBackground , StyleSheet , Text } from "react-native";



const UyTFab = ({pom,setCallback}:{pom:boolean,setCallback:() => void}) => {

    const getSource = (pom)
    ? require('../assets/tora.png')
    : require('../assets/ushio.png');

    return(
        //Puedes mandar estilos en array, y mandar mas de un estilo o generadores de estilo
        <TouchableOpacity onPress={setCallback} style={[styles.customfab]}>
            <ImageBackground source={getSource} style={styles.backgroundImage}>
                <Text style={styles.fabText}>{`${(pom) ? '+1' : '-1'}`}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

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
    fabText:{
        color:'red',
        fontWeight:'700',
        fontSize:30,
        textAlign:'center',
    }
    
});

export default UyTFab

