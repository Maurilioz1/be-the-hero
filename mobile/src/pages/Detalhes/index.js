import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import logoImg from '../../assets/logo.png';
import * as MailComposer from 'expo-mail-composer';

export default function Detalhes() {
    const navigation = useNavigation();
    const route = useRoute();
    const caso = route.params.caso;
    const message = `Olá ${caso.nome}, estou entrando em contato pois gostaria de ajudar no caso "${caso.titulo}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(caso.valor)}.`;

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${caso.titulo}.`,
            recipients: [caso.email],
            body: message
        });
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=55${caso.whatsapp}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color='#E02041' />
                </TouchableOpacity>
            </View>

            <View style={styles.caso}>
                <Text style={[styles.propriedadeCaso, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.valorCaso}>{caso.nome}</Text>
                <Text style={styles.valorCaso}>{caso.cidade} / {caso.uf}</Text>

                <Text style={styles.propriedadeCaso}>CASO:</Text>
                <Text style={styles.valorCaso}>{caso.descricao}</Text>

                <Text style={styles.propriedadeCaso}>VALOR:</Text>
                <Text style={styles.valorCaso}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(caso.valor)}</Text>
            </View>

            <View style={styles.caixaContato}>
                <Text style={styles.heroTitulo}>Salve o dia!</Text>
                <Text style={styles.heroTitulo}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescricao}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-Mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}