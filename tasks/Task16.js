import React, { Component  } from 'react';
import { View, Text ,Button,Alert, StyleSheet} from 'react-native';



//in the class the code inide render will be excuted
class Task16 extends Component {
  constructor(){
    super();
    this.state = {
      content: true,
      name: "omar"
    };
  }
  hide_show = () => {
    this.state.content === true?this.setState({content:false}):this.setState({content:true});
    //this.setState({content : !this.state.content});
  }
 render(){ 
  //{ this.state.content && <Text>Hello from Task16!</Text> || <Text></Text>}
  return (
     
    <View style={styles.container}>
      
      {this.state.content?<Text>Hello from Task16!</Text>:<Text></Text>}
      <Button
      title = "show"
      onPress={this.hide_show}
      />
    </View>
    //onPress={() => Alert.alert('Simple Button pressed')} inside button
      //<Button
      //title = "test"
      //onPress={() => Alert.alert("Button in react native")}
      ///>
  );
};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
  }
});

export default Task16;
