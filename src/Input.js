import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
} from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const Input = ({ inputValue, inputChange }) => {
    return(
        <View style={styles.inputContainer}>
            <Shadow
                style={styles.shadow}
                startColor={"rgba(0,0,0,.3)"}
                // endColor={"rgba(0,0,0,.1)"}
                offset={[2, 2]}
                distance={4}
                // stretch
            >
                    <TextInput
                        value={inputValue}
                        style={styles.input}
                        placeholder="What needs to be done?"
                        placeholderTextColor={"#CACACA"}
                        selectionColor={"#666"}
                        onChangeText={inputChange}
                    />
            </Shadow>
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        // height: 60,
        marginLeft: 20,
        marginRight: 20,
        // paddingBottom: 
        paddingBottom: 5,
    },
    shadow: {
        width: "100%",
        // height: "100%",
    },
    input: {
        // height: 60,
        backgroundColor: "#fff",
        // color: "#ddd",
        paddingLeft: 10,
        paddingRight: 10,
    }
})

export default Input;