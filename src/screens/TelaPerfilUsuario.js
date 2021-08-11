import React from 'react';
import { 
    StatusBar, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';
import CommonStyles from '../CommonStyles';

export default () => {
    return (
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={CommonStyles.corSecundaria}
                barStyle="light-content" />
            <Text style={styles.titulo}>Tela Perfil Usuário</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: CommonStyles.corPrincipal,
        flex: 1,
        justifyContent: 'center',
    },
    titulo: {
        color: CommonStyles.corSecundaria,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 80,
        textAlign: 'center',
    },
});