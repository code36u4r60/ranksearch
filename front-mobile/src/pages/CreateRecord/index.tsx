import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import Header from '../../components/Header'

const CreateRecord = () => {
    return (

        <View>
            <Header />
            <Text style={styles.text}>
                Ola
            </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    text: {
      color: '#FFF',
      fontSize: 50
    },
  
  });

export default CreateRecord;