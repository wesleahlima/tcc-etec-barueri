import React, { useState } from 'react';
import {
    Image, 
    ScrollView, 
    StatusBar, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View 
} from 'react-native';
import SearchBar from '../components/SearchBar';
import Carousel from 'react-native-snap-carousel';
import estabelecimentos from '../data/Estabelecimentos';
import CommonStyles from '../CommonStyles';

export default () => {
    const [buscar, setBuscar] = useState('');

    function estabelecimentosProximos({ item }) {
        return (
            <View style={styles.carouselContainer}>
                <Image style={styles.imagemEstabelecimento} 
                    source={{ uri: `${item.imageURL}` }} />
                <View style={styles.infoContainer}>
                    <TouchableOpacity>
                        <Text style={styles.nomeFantasia}>{item.nomeFantasia}</Text>
                        <Text style={styles.endereco}>{item.endereco}, {item.numero} - {item.bairro}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar 
                backgroundColor={CommonStyles.corSecundaria}
                barStyle="light-content" />
            <View style={styles.searchBarContainer}>
                <SearchBar
                    onChangeText={value => setBuscar(value)} 
                    placeholder="Buscar..."
                    value={buscar} 
                />
            </View>
            <Text style={styles.titulo}>Estabelecimentos próximos</Text>
            <Carousel 
                data={estabelecimentos}
                itemWidth={350}
                renderItem={estabelecimentosProximos}
                sliderWidth={400}
            />
            <Text style={styles.titulo}>Promoções</Text>
            <Carousel 
                data={estabelecimentos}
                itemWidth={350}
                renderItem={estabelecimentosProximos}
                sliderWidth={400}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: CommonStyles.corPrincipal,
        flex: 1,
    },
    searchBarContainer: {
        alignSelf: 'center',
        marginVertical: 20,
    },
    titulo: {
        color: CommonStyles.corSecundaria,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    carouselContainer: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginBottom: 10,
        paddingVertical: 5,
    },
    imagemEstabelecimento: {
        height: 218,
        marginBottom: 2,
        width: 330,
    },
    infoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    nomeFantasia: {
        color: CommonStyles.corSecundaria,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    endereco: {
        fontSize: 14,
        textAlign: 'center',
    }
});