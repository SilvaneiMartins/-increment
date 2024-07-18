import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Valor: {count}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Adicionar" onPress={() => setCount(count + 1)} />
                <Button title="Diminuir" onPress={() => setCount(count - 1)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        width: 200,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
