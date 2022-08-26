import { StyleSheet, View } from 'react-native';
import Titulo from "../componentes/Titulo";
import Rodape from '../componentes/Rodape';

export default function Login() {
    return (
        <View style={styles.container}>
            <Titulo text="Teste"></Titulo>
            <Rodape></Rodape>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
