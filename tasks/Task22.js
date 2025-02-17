import React, { useState } from "react";
import { Text, View, TextInput} from 'react-native';

const Task22 = ({value}) =>{
    return (
        <View>
            <Text>your name is : {value}</Text>
        </View>
    );
};
const MyFunctionPage = () => {
    const [text,useValue] = useState('');
    return (
        <View>
            <TextInput
                value={text}
                onChangeText={useValue}
                placeholder="enter ur name...."
            />
            <Task22 value = {text}/>
        </View>
    );
};

export default MyFunctionPage;
/* another way to solve the task
import React, { useState } from "react";
import { Text, View, Button, TextInput} from 'react-native';

const Task22 = () =>{
    const [text,setText] = useState('');
    return (
        <View>
            <MyFunctionPage setText={setText} text={text}/>
            <Text>You typed: {text}</Text>
        </View>
    );
};
const MyFunctionPage = ({setText,text}) => {

    return (
        <View>
            <TextInput
                value={text}
                onChangeText={setText}
                placeholder="Enter text..."
            />
        </View>
    );
};

export default Task22;
*/