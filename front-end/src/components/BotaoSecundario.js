import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import CommonStyles from '../CommonStyles'

export default (props) => {
    return(
        <TouchableOpacity style={styles.botao} onPress={props.onPress} >
            <Text style={styles.textoBotao}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: CommonStyles.corTerciaria,
        borderRadius: 5,
        paddingVertical: 10,
        width: 300,
    },
    textoBotao: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})