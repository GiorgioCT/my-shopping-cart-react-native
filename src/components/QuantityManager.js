import React, {Component} from 'react';
import {StyleSheet,Text,View,TouchableOpacity, Button} from 'react-native';

class QuantityManager extends Component{
  constructor(props){
    super(props);
    this.state={quantity:0};
    this.onQuantityChange=this.onQuantityChange.bind(this);
  }

  onQuantityChange({decrease}){
    if(decrease){
      if(this.state.quantity>0){
        this.setState({quantity:this.state.quantity-1});
        this.props.aggiornamento(-this.props.basePrice);
      }
      }
    else{
      this.setState({quantity:this.state.quantity+1});
      this.props.aggiornamento(this.props.basePrice);
}
  }

  render(){
    const subtotale=(this.state.quantity*this.props.basePrice).toFixed(2);
    return(
      <View style={styles.wrapper}>
        <Text> Quantità: {this.state.quantity}</Text>
        <View style={styles.buttons}>
          <Button
            title="+"
            onPress={this.onQuantityChange}
            color="red"
          />
          <Button title="-" onPress={()=>this.onQuantityChange({decrease:true})}/>
        </View>
        <Text>SubTotale:{subtotale} Euro</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  wrapper:{
    borderWidth:1,
    flex:1,
    justifyContent:'center'
  },
  buttons:{
    flexDirection:'row',
    justifyContent:'center'
  }
});

export default QuantityManager;
