import Expo from 'expo';
import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Header from './components/Header';
import OrderItem from './components/OrderItem';
//import Button from './components/Button';

/*const App= () =>(


  <View style={styles.container}>

    <Header title="Shopping cart"/>
      <ScrollView
        showsVerticalScrollIndicator={false}>
    <OrderItem
      source={{uri:"http://i.imgur.com/Kw0xkRw.png"}}
      product="Halo 5: Guardians"
      price={29.99}
      desc="Esclusiva Xbox One. Sparatutto in prima persona. Anno 2015"
      />
    <OrderItem
      source={{uri:"http://news.xbox.com/wp-content/uploads/Forza-Horizon-3_Boxshots_XB1_Left_RGB.jpg"}}
      product="Forza Horizon 3"
      price={49.99}
      desc="Esclusiva console Xbox One. Gioco di corse. Anno 2016"
      />
    <OrderItem
      source={{uri:"http://www.gearsofwarart.com/images/gears-boxart.png"}}
      product="Gears of War 4"
      price={39.99}
      desc="Esclusiva console Xbox One. Sparatutto in terza persona. Anno 2016"
      />
    </ScrollView>
  </View>


);*/

class App extends React.Component{
  state={totale:0}
  quantitaCambiata(amount){
    this.setState({totale:parseFloat((this.state.totale+amount).toFixed(2))})
  }
  render(){
    return(
      <View style={styles.container}>
        <Header title="Shopping cart" />
      <View style={styles.total}>
        <Text style={styles.text}> Totale: {this.state.totale} Euro </Text>
      </View>


          <ScrollView
            showsVerticalScrollIndicator={false}>
          <OrderItem
            source={{uri:"http://i.imgur.com/Kw0xkRw.png"}}
            product="Halo 5: Guardians"
            price={29.99}
            desc="Esclusiva Xbox One. Sparatutto in prima persona. Anno 2015"
            aggiornamento={this.quantitaCambiata.bind(this)}
            />
            <OrderItem
              source={{uri:"http://news.xbox.com/wp-content/uploads/Forza-Horizon-3_Boxshots_XB1_Left_RGB.jpg"}}
              product="Forza Horizon 3"
              price={49.99}
              desc="Esclusiva console Xbox One. Gioco di corse. Anno 2016"
              aggiornamento={this.quantitaCambiata.bind(this)}
              />
            <OrderItem
              source={{uri:"http://www.gearsofwarart.com/images/gears-boxart.png"}}
              product="Gears of War 4"
              price={39.99}
              desc="Esclusiva console Xbox One. Sparatutto in terza persona. Anno 2016"
              aggiornamento={this.quantitaCambiata.bind(this)}
              />
          </ScrollView>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex:1 ,
      backgroundColor:'#fff'
      //flexDirection: 'column',
      //justifyContent: 'flex-start',
      //top:23,
      //backgroundColor:'orange'
      //alignItems: 'center'
  },
  total:{
    justifyContent: 'center',
    //height: 50,
    flexBasis: 55,
    backgroundColor:'grey', //'#d5d5d5',
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

export default App;
