import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking, FlatList } from 'react-native';
import * as MailComposer from 'expo-mail-composer'; 

import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const { incident } = route.params;
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de R$${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'  }).format(incident.value)} reais.`;

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [`${incident.email}`],
            body: message,
        }); 
    }
    
    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=+5564992801200 &text=${message}`); }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, styles.incidentPropertyFirstChild]}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city} - {incident.uf}</Text> 
                {/* <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>  */}
                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>
                    {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'  }).format(incident.value)}    
                </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroicTitle}>Salve o dia!</Text>
                <Text style={styles.heroicTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.heroContactText}>Entre em contato:</Text>
                <View style={styles.contactButtonBox}>
                    <TouchableOpacity style={styles.contactButton} onPress={sendWhatsApp}>
                        <Text style={styles.contactButtonText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contactButton} onPress={sendMail}>
                        <Text style={styles.contactButtonText}>E-mail</Text>
                    </TouchableOpacity> 
                </View>
            </View>
        </View>


    );
}