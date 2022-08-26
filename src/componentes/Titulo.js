import { StyleSheet, Text, View } from "react-native";

export default function Titulo(props) {
    return <View style={styles.container}><Text>{props.text}</Text></View>;
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 16,
        alignItems: "center",
        backgroundColor: "red"
    },
});