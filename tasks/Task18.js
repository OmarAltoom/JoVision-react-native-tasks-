import {React,Component} from "react";
import {Text,View,Button,StyleSheet,ActivityIndicator} from 'react-native'
class Task18 extends Component{
    constructor(){
        super();
        this.state = {
            viewType:true
        }
    }
    componentDidMount = ()=>{
        setTimeout(() => {this.setState({ viewType: false })},3000)
    }
    render(){
        return(
        <View>
            {
                this.state.viewType?<ActivityIndicator size="small" color="#0000ff" />:<Text>omar altoom</Text>
            }
        </View>
        )
    }
    
}


export default Task18;