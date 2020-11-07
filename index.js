import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Video,
  Image,
  VideoControl,
  Environment,  
  VideoPano,
  staticResourceURL,
  staticAssetURL
} from 'react-360';
import Slides from './Slides'
import Challenges from './Challenge'


export default class junction extends React.Component {
  componentDidMount() {
   
   
  }
  render() {
    return (
      <View>

      <View style={styles.panel}>
        <Video style={{width: 900.0,height:500.0}} source={{uri:'./static_assets/Genelec.mov'}} />
      </View>

      </View>
    );
  }
};


class Show extends React.Component {
  componentDidMount() {
    
  }
  render(){
      return(
        <View style={styles.productsView} >
          <Slides/>
        </View>
      );
    }
   
}

class Company extends React.Component{
  render(){
    return(
      <View style={styles.productsView}>
        <Challenges/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  productsView:{
    width:800,
    height:500,
    borderRadius: 30,
    backgroundColor:'#ff4752',
    
  }
});
AppRegistry.registerComponent('Showroot', () => Show);
AppRegistry.registerComponent('Companyroot', () => Company);

AppRegistry.registerComponent('junction', () => junction);

