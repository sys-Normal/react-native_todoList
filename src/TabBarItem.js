import React from 'react';
import {
    Text,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
const TabBarItem = ({border, title, selected, setType, type}) => {
    return(
        <TouchableHighlight
            underlayColor={"#efefef"}
            onPress={setType}
            style={[
                styles.item,
                selected ? styles.selected : null,
                border ? styles.border : null,
                type === title ? styles.selected : null
            ]}
        >
            <Text>
                {title}
            </Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    border: {
        borderLeftWidth: 1,
        borderLeftColor: "#ddd",
    },
    itemText: {
        color: "#777",
        fontSize: 16,
    },
    selected: {
        backgroundColor: "#fff",
    },
    bold: {
        fontWeight: "bold",
    },
})

export default TabBarItem;