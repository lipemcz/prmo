import { StyleSheet, Text, View } from "react-native";

export default function Rodape() {
    return (
        <View style={styles.container}>
            <Text> Todos os direitos estão reservados</Text>
            <Text>blablabla</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 16,
        alignItems: "center",
        backgroundColor: "red"
    },
});