import React, { useState, useEffect } from 'react'

import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import { RectButton } from 'react-native-gesture-handler'

import { FontAwesome5 as Icon } from '@expo/vector-icons'

import Axios from 'axios'

import Header from '../../components/Header'
import PlatformCard from './PlatformCard'
import { GamePlatform, Game } from './type'


const placeholder = { label: 'Selecione o jogo', value: null }
const BASE_URL = 'http://10.0.2.15:8080';

const mapSelectValue = (games: Game[]) => games.map(game => ({
    ...game,
    label: game.title,
    value: game.id,
}));


const CreateRecord = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [platform, setPlatform] = useState<GamePlatform>();
    const [selectedGame, setSelectedGame] = useState('');
    const [allGames, setAllGames] = useState<Game[]>([]);
    const [filteredGames, setFilteredGames] = useState<Game[]>([])

    const handleChangePlatform = (selectedPlatform: GamePlatform) => {
        setPlatform(selectedPlatform);
        const gamesByPlatform = allGames.filter(game => game.platform === selectedPlatform);
        setFilteredGames(gamesByPlatform);
    }

    const handleSubmit = () => {

        const payload = {
            name,
            age,
            gameId: selectedGame
        }

        Axios.post(`${BASE_URL}/records`, payload).then(() => {
            Alert.alert("Dados guardados com sucesso!");
            setName('');
            setAge('');
            setSelectedGame('');
            setPlatform(undefined);
        })
            .catch(() => Alert.alert('Erro ao gravar os dados!'))
    }

    useEffect(() => {
        Axios.get(`${BASE_URL}/games`)
            .then(response => {
                const selectValues = mapSelectValue(response.data);
                setAllGames(selectValues);
            })
            .catch(() => Alert.alert('Erro ao obter a lista de jogos!'))
    }, [])

    return (
        <>
            <Header />
            <View style={styles.container}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Nome"
                    onChangeText={text => setName(text)}
                    value={name}
                    placeholderTextColor="#9E9E9E" />

                <TextInput
                    style={styles.inputText}
                    placeholder="Idade"
                    onChangeText={text => setAge(text)}
                    value={age}
                    placeholderTextColor="#9E9E9E"
                    keyboardType="numeric"
                    maxLength={3} />


                <View style={styles.platformContainer}>
                    <PlatformCard
                        platform="PC"
                        icon="laptop"
                        onChange={handleChangePlatform}
                        activePlatform={platform} />

                    <PlatformCard
                        platform="XBOX"
                        icon="xbox"
                        onChange={handleChangePlatform}
                        activePlatform={platform} />

                    <PlatformCard
                        platform="PLAYSTATION"
                        icon="playstation"
                        onChange={handleChangePlatform}
                        activePlatform={platform} />
                </View>

                <RNPickerSelect
                    onValueChange={
                        value => { setSelectedGame(value) }
                    }
                    value={selectedGame}
                    placeholder={placeholder}
                    items={filteredGames}
                    style={pickerSelectStyle}
                    Icon={() => {
                        return <Icon name='chevron-down' color='#9E9E9E' size={25} />
                    }}
                />

                <View style={styles.footer}>
                    <RectButton style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>
                            Salvar
                        </Text>
                    </RectButton>
                </View>
            </View>
        </>
    );
}



const pickerSelectStyle = StyleSheet.create(
    {
        inputIOS: {
            paddingVertical: 12,
            paddingHorizontal: 20,
            backgroundColor: '#FFF',
            borderRadius: 10,
            color: '#ED7947',
            paddingRight: 30,
            height: 50
        },
        inputAndroid: {
            paddingVertical: 12,
            paddingHorizontal: 20,
            backgroundColor: '#FFF',
            borderRadius: 10,
            color: '#ED7947',
            paddingRight: 30,
            height: 50
        },
        placeholder: {
            color: '#9E9E9E',
        },
        iconContainer: {
            top: 10,
            right: 12,
        }
    }
)

const styles = StyleSheet.create(
    {
        container: {
            marginTop: '15%',
            paddingRight: '5%',
            paddingLeft: '5%',
            paddingBottom: 50
        },
        inputText: {
            height: 50,
            backgroundColor: '#FFF',
            borderRadius: 10,
            color: '#ED7947',
            fontFamily: "Play_700Bold",
            fontSize: 16,
            paddingLeft: 20,
            marginBottom: 21
        },
        platformContainer: {
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        footer: {
            marginTop: '15%',
            alignItems: 'center',
        },
        button: {
            backgroundColor: '#00D4FF',
            flexDirection: 'row',
            borderRadius: 10,
            height: 60,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        buttonText: {
            fontFamily: "Play_700Bold",
            fontWeight: 'bold',
            fontSize: 18,
            color: '#0B1F34',
        }
    }
);

export default CreateRecord;