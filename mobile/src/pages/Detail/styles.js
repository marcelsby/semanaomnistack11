import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    incident: {
        padding: 24 ,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16, 
        marginTop: 24,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },

    incidentPropertyFirstChild: {
        marginTop: 0,
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },

    contactBox: {
        backgroundColor: '#FFF',
        padding: 24,
        borderRadius: 8,
    },

    heroicTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 30,
    },

    heroContactText: {
        marginTop: 16, 
        marginBottom: 16,
        color: '#737380',
    },

    contactButtonBox: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    contactButton: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    contactButtonText: {
        fontSize: 14,
        color: '#fff',
    }
});