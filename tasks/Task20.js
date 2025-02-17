import {React,Component,useState} from "react";
import {Text,View,Button,StyleSheet,ActivityIndicator} from 'react-native'
const Task20 = () => {
        const [showPage, setshow] = useState(false);
        return(
        <View>
            <Button
            title = "go to the MyClassPage"
            onPress={() => setshow(!showPage)}/>
            {showPage?<MyClassPage/>:null}
            {}
        </View>
        );
    
}
class MyClassPage extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        console.log("MyClassPage did mount");
    }
    componentWillUnmount(){
        console.log("MyClassPage will unmount");
    }
    render(){
        return(
            <View>
                <Text>
                    this is the MyClassPage page
                </Text>
            </View>
        );
    }
}

export default Task20;