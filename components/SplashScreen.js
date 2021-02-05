import React,{useEffect,useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Blue from '../assests/blue.png'
import Orange from '../assests/orange.png'
import Red from '../assests/red.png'
import Purple from '../assests/purple.png'
import WhiteLogo from '../assests/whiteLogo.png'

const SplashScreen = ({navigation}) => {
    
    useEffect(() => {
    setTimeout(()=>{setFlagBlue(true)}, 200);
    setTimeout(()=>{setFlagOrange(true)}, 550);
    setTimeout(()=>{setFlagPurple(true)}, 880);
    setTimeout(() => { setFlagRed(true) }, 1200);
    setTimeout(()=>{navigation.replace("Home")}, 1800);

  }, []);


    const [flagRed, setFlagRed] = useState(false);
    const [flagOrange, setFlagOrange] = useState(false);
    const [flagBlue, setFlagBlue] = useState(false);
    const [flagPurple, setFlagPurple] = useState(false);
    return (
        <View style={styles.container}>
            <View style={{alignContent:'center'}}>
                <View style={{height:132,width:250,alignSelf:'center'}}>
                    <View style={{flexDirection:'row' }}>
                        <View style={{ }}>
                            {flagBlue?<Image style={[styles.imageBlue]} source={Blue} />:<View/>}
                            {flagOrange?<Image style={[styles.imageOrange]} source={Orange} />:<View/>}
                        </View>
                        <View style={{}}>
                            {flagPurple?<Image style={[styles.imagePurple]} source={Purple} />:<View/>}
                            {flagRed?<Image style={[styles.imageRed]} source={Red} />:<View/>}
                        </View>   
                    </View>
                </View>
                 <Image style={styles.imageLogo} source={WhiteLogo} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    imageRed: {
        resizeMode: 'contain',
        height: 175,
        width: 175,
        marginLeft: -115,
        marginTop:-245
    },
    imageOrange: {
        resizeMode: 'contain',
        height: 140,
        width: 140,
        marginTop: -203,
        marginLeft: 15,
        marginRight:-10
    },
    imageBlue: {
        resizeMode: 'contain',
        height: 180,
        width: 180,
        marginRight:-5
    },
    imagePurple: {
        resizeMode: 'contain',
        height: 190,
        width: 190,
        marginLeft: -115,
        marginTop:15
    },
    imageLogo: {
        resizeMode: 'contain',
        height: 170,
        width: 170,
        alignSelf: 'center',
        marginTop:-150
    }
})
export default SplashScreen;