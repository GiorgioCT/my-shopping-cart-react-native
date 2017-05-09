import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

class Header extends React.Component{
  render(){
    return(
      <View style={[styles.wrapper, this.props.style]}>
        <Text style={styles.text}>
          {this.props.title}</Text>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  wrapper:{
    //top: 20,
    //flex:1,
    justifyContent: 'center',
    //height: 50,
    flexBasis: 55,
    backgroundColor:'black', //'#d5d5d5',
    shadowOffset: { height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2
  },

  text: {
    fontSize: 22,
    //borderradius: 5,
    color: 'blue',
    textAlign: 'center'
  }

});

export default Header;
