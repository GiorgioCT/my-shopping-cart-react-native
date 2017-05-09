import React,{Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import Product from './Product';
import Thumbnail from './Thumbnail';
import QuantityManager from './QuantityManager';

const styles=StyleSheet.create({
  wrapper:{
    marginHorizontal:15,
    marginTop:15,
    height:200,
    borderRadius:5,
    //top: 20,
    flexDirection:'row',
    //justifyContent: 'center',
    //alignItems:'flex-start',
    //height: 50,
    //flexBasis: 70,
    backgroundColor:'orange', //'#d5d5d5',
    shadowOffset: { height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2
  }
});

 class OrderItem extends Component{
  render(){
    return(
      <View style={styles.wrapper}>
        <Thumbnail url={this.props.source}/>
        <Product title={this.props.product} price={this.props.price} desc={this.props.desc}/>
        <QuantityManager basePrice={this.props.price} aggiornamento={this.props.aggiornamento.bind(this)}/>

      </View>
    );
  }
}

export default OrderItem;
