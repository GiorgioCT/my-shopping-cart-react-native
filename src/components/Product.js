import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
/*class Product extends React.Component{
  render(){
  return(
  <View style={[styles.wrapper, this.props.style]}>
    <Text style={styles.text}>
      {this.props.name}</Text>
    <Text style={styles.text}>
    {this.props.price} Euro</Text>

  </View>

);
}
}*/

const styles= StyleSheet.create({
  wrapper:{
    borderWidth:1,
    flex:2
    //top: 20,
    //flex:1,
    //flexDirection:'row',
    //justifyContent: 'center',
  //  alignItems:'center',
    //height: 50,
    //flexBasis: 40,
    //backgroundColor:'orange', //'#d5d5d5',
    //shadowOffset: { height: 2 },
    //shadowColor: 'black',
    //shadowOpacity: 0.2
  },
  title:{
    fontSize: 16,
    fontWeight:'400'
  },
  desc:{
    fontSize:12
  },
  price:{
    fontSize:20,
    fontWeight:'600'
  }


});

const Product=({title,desc,price}) =>{
  const {wrapper}=styles;
  return(
    <View style={wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
      <Text style={styles.price}>{price} Euro</Text>
    </View>
  )
};


export default Product;
