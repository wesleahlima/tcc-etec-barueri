import React, { useEffect, useState } from 'react'
import {
    FlatList,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import api from '../api/Api'
import BotaoPrincipal from '../components/BotaoPrincipal'
import CommonStyles from '../CommonStyles'

export default (props) => {
    const [servicos, setServicos] = useState([])
    const { cod_fornecedor, nome_fantasia, fotos_lugar } = props.route.params

    useEffect(() => {
        api.get(`/servicos/${cod_fornecedor}`)
            .then(response => setServicos(response.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={CommonStyles.corSecundaria}
                barStyle="light-content" />
            <View style={styles.nomeFantasiaContainer}>
                <Text style={styles.texto}>{nome_fantasia}</Text>
            </View>
            <View style={styles.imagemContainer}>
                <Image style={styles.imagemEstabelecimento} 
                    source={{ uri: `${fotos_lugar}` }} 
                />
            </View>
            <Text style={styles.textoServicos}>Serviços</Text>
            <View style={styles.servicosContainer}>
                <FlatList 
                    data={servicos}
                    keyExtractor={item => item.cod_servicos.toString()}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <View style={styles.infoServico}>
                                    <Text style={styles.textoInfoServico}>{item.nome_servico}</Text>
                                    <Text style={styles.textoInfoServico}>R$ {item.valor.toString().replace(".", ",")}</Text>
                                </View>
                                <Divider orientation="horizontal" />
                            </View>
                        )
                    }}
                />
            </View>
            <BotaoPrincipal title="Agendar" onPress={() => console.log(servicos)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: CommonStyles.corPrincipal,
        flex: 1,
    },
    nomeFantasiaContainer: {
        alignItems: 'center',
        width: '85%',
    },
    texto: {
        color: CommonStyles.corSecundaria,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 50,
        textAlign: 'center',
    },
    imagemContainer: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
    },
    imagemEstabelecimento: {
        height: 218,
        width: 330,
    },
    textoServicos: {
        color: CommonStyles.corSecundaria,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    servicosContainer: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginBottom: 20,
        padding: 15,
        width: '85%',
    },
    infoServico: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textoInfoServico: {
        color: CommonStyles.corSecundaria,
        fontSize: 16,
        fontWeight: 'bold',
    }
})