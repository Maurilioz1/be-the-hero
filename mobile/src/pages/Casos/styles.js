import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131A',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    listaCasos: {
        marginTop: 32
    },

    casos: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        marginBottom: 16
    },

    propriedadeCaso: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold'
    },

    valorCaso: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detalhesButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detalhesButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold'
    }
});