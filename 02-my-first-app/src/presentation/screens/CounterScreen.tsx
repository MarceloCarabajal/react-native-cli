import { StyleSheet, Text, View } from "react-native"
import { PrimaryButton } from "../components/";
import { useState } from "react";
import { Button } from "react-native-paper";

export const CounterScreen = () => {

    const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{ count }</Text>
        <Button 
            onPress={ () => setCount(count + 1) }
            onLongPress={() => setCount(0)}
            mode="contained"
        >
            Incrementar
        </Button>
        {/* <PrimaryButton 
            label="Incrementar"
            onPress={() => setCount(count + 1)}
            onLongPress={() => setCount(0)}
        /> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300',
    },
})