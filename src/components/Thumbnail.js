import React from 'react';
import { Image ,StyleSheet} from 'react-native';
/*class Thumbnail extends React.Component{
  render(){
    return(
    <View style={[styles.wrapper, this.props.style]}>
      <Image source={{uri:this.props.image}}/>
    </View>
    );
 }
}*/

const Thumbnail =({url,style})=>(
  <Image
    source={url}
    resizeMode="contain"
    style={{width:100, marginLeft:10,flex:1}}
    />
);
/*const styles=StyleSheet.create({
  wrapper:{
    //top: 20,
    //flex:1,
    //flexDirection:'row',
    //justifyContent: 'center',
    alignItems:'flex-start',
    //height: 50,
    flexBasis: 30,
    backgroundColor:'orange', //'#d5d5d5',
    shadowOffset: { height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2
  },
  image:{
    top:30,
    height:70,
    width:70,
    resizeMode:'center'

  }

});*/

export default Thumbnail;
