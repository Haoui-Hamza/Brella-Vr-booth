import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Video,
  asset,
  VrButton,
  Image,
  VideoControl,
  Environment,  
  VideoPano,
  staticResourceURL,
  staticAssetURL
} from 'react-360';

import { Linking } from 'react-native';

export default class Challenge extends React.Component {
    state = {
        index : 1 ,   
    };
    increment = () => {
        if(this.state.index < 3){
            this.setState({
                index: (this.state.index += 1)
            });
        }else{
            this.setState({
                index: (this.state.index = 1)
            });
        }
        
    };
    decrese = () => {
        if(this.state.index > 1){
            this.setState({
                index: (this.state.index -=1)
            });
        }else{
            this.setState({
                index : (this.state.index = 3)
            })
        }
        
    }
    loadInBrowser = () => {
        Linking.openURL('https://www.genelec.com/').catch(err => console.error("Couldn't load page", err));
    };
    render() {
        return (
          
          <View style={styles.slides} >
            
            <Text style={styles.titleText}>Gallery</Text>
            <View style={styles.ProductSlide}>
                
                <VrButton onClick={()=>{this.decrese()}}>
                        <Image style={{width: 60.0, height:60.0 }} source={{uri: './static_assets/icons/previous.png'   }} />
                </VrButton>
                    <Image style={{width: 500.0, height:300.0  }} source={{uri: `./static_assets/challenge${this.state.index}.png`   }} />
                <VrButton onClick={() => this.increment()}> 
                    <Image style={{width: 60.0, height:60.0 }} source={{uri: './static_assets/icons/next.png'   }} />
                </VrButton> 
                
            </View>
            
          </View>
        );
    }
}

const styles = StyleSheet.create({
    
   
    slides:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    ProductSlide:{
        width: 700,
        height: 100,
        marginTop:110,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft : 10,
        paddingRight:10
    },
    visite:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 90

    },
    buyText:{
        fontSize: 30,
        fontWeight: "bold"
    },
    titleText:{
        fontSize: 47,
        fontWeight: "bold",
        marginTop:40
    }


});