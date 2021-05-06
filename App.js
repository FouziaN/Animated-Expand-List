import * as React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import ListItem from './src/ListItem';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: Data,
    };
  }

  renderItem = ({ item, index }) => {
    return (
      <ListItem
        title={item.item}
        subtitle={item.subItem}
        maxHeight={item.expandHeight}
        minHeight={item.unexpandHeight}
      />
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.MainContainer}>
        <View style={styles.topcon}>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://image.flaticon.com/icons/png/128/152/152351.png',
            }}
          />
           <Text style={styles.headertext}>FAQ</Text>
        </View>

        <View style={styles.con}>
          <FlatList data={this.state.data} renderItem={this.renderItem} />
        </View>
      </SafeAreaView>
    );
  }
}
const Data = [
  {
    item: 'What is Sell on Amazon or SOA?',
    subItem: 'Sell on Amazon is a program that enables you to list and sell your product on Amazon.in.',
    unexpandHeight: 50,
    expandHeight: 150,
  },
  {
    item: 'How does selling on Amazon.in work?',
    subItem: "Selling on Amazon.in is easy. First you list the products that you want to sell on Amazon.in marketplace. Customer sees your product and makes a purchase. You will receive a notification to ship the product. You deliver the product to the customer and confirm shipment or let Amazon fulfill the order for you through FBA or Easy ship. Amazon will deposit the funds into your bank account after deducting our fees.",
    unexpandHeight: 75,
    expandHeight: 350,
  },
  {
    item: 'What is a prime badge?',
    subItem: "Prime Badge is offered to Prime Sellers who enjoy special services by subscribing to Fulfillment by Amazon (FBA), Local Shops on Amazon, or Seller Flex. A Prime Badge helps you seamlessly store and ship your products and sell your products on Prime Day. Find out more about the benefits of Prime Badge here.",
    unexpandHeight: 50,
    expandHeight: 300,
  },
  {
    item: 'How do I list my products on Amazon.in?',
    subItem: "You can use our Web-based interface to list products one at a time, or excel-based inventory files to list your products in bulk. The procedure and information required will vary depending on whether your products are already in the Amazon.in catalogue. Once you complete your registration for selling on Amazon, you will be guided on the steps needed to list your products. Learn more about the listing process here." ,
    unexpandHeight: 75,
    expandHeight: 310,
  },
  {
    item: 'What do I need to list my products?',
    subItem: "Based on the category and the brand you are selling, understand step-by-step process to selling on Amazon.in, top selling sub-categories, documents required to list you products, calculating fees, etc." ,
    unexpandHeight: 75,
    expandHeight: 200,
  },
];
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor : 'white'
  },
  headertext: {
    fontSize: 20,
    fontWeight: 'bold',
     marginLeft : 130
  },
  headertextcon: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    height: 30,
    width: 30,
    
  },
  topcon: {
    flexDirection: 'row',
    backgroundColor : 'white',
    paddingVertical: 10,
    paddingTop: 15,
    shadowRadius: 10,
    paddingHorizontal: 13,
    shadowColor: 'gray',
    shadowOpacity: 0.3,
  },
  con: {
    flex: 1,
    paddingHorizontal: 10,
  },
});