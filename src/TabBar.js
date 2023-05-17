import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import TabBarItem from './TabBarItem';

const TabBar = ({setType, type}) => {
    return(
        <View style={styles.container}>
            <TabBarItem
                type={type}
                title="All"
                setType={() => setType("All")}
            />
            <TabBarItem
                type={type}
                border
                title="Active"
                setType={() => setType("Active")}
            />
            <TabBarItem
                type={type}
                title="Complete"
                border
                setType={() => setType("Complete")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: "#ddd",
    },
})

export default TabBar;