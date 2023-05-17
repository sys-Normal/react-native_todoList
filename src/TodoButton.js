import React from 'react';
import {
    Text,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';

const TodoButton = ({onPress, complete, name }) => {
    return(
        <TouchableHighlight
            onPress={onPress}
            underlayColor="#efefef"
            style={styles.button}
        >
            <Text
                style={[
                    styles.text,
                    complete ? styles.complete : null,
                    name === "Delete" ? styles.deleteButton : null
                ]}
            >
                {name}
            </Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: "flex-end",
        marginRight: 5,
        padding: 7,
        borderWidth: 1,
        borderColor: "#ededed",
        borderRadius: 4,
    },
    text: {
        color: "#666",
    },
    complete: {
        color: 'green',
        fontWeight: "bold",
    },
    deleteButton: {
        color: "rgba(175, 47, 47, 1)",
    }
})

export default TodoButton;