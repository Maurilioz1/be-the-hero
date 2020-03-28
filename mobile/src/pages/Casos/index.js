import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons/';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

export default function Casos() {
    const [casos, setCasos] = useState([]);
    const [totalCasos, setTotalCasos] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    function navigateToDetalhes(caso) {
        navigation.navigate('Detalhes', { caso });
    }

    async function carregarCasos() {

        if (loading) {
            return
        }

        if (totalCasos > 0 && casos.length === totalCasos) {
            return;
        }

        setLoading(true);

        const response = await api.get('casos', { params: { page } });


        setCasos([...casos, ...response.data]);
        setTotalCasos(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        carregarCasos();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de casos: <Text style={styles.headerTextBold}>{totalCasos}</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                style={styles.listaCasos}
                data={casos}
                keyExtractor={caso => String(caso.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={carregarCasos}
                onEndReachedThreshold={0.2}
                renderItem={({ item: caso }) => (
                    <View style={styles.casos}>
                        <Text style={styles.propriedadeCaso}>ONG:</Text>
                        <Text style={styles.valorCaso}>{caso.nome}</Text>

                        <Text style={styles.propriedadeCaso}>CASO:</Text>
                        <Text style={styles.valorCaso}>{caso.titulo}</Text>

                        <Text style={styles.propriedadeCaso}>VALOR:</Text>
                        <Text style={styles.valorCaso}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(caso.valor)}</Text>

                        <TouchableOpacity style={styles.detalhesButton} onPress={() => navigateToDetalhes(caso)}>
                            <Text style={styles.detalhesButtonText}>Ver mais detalhes.</Text>
                            <Feather name="arrow-right" size={16} color='#E02041' />
                        </TouchableOpacity>
                    </View>
                )} />
        </View>
    );
}