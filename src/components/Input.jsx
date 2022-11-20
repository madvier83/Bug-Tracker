import {StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

export default function Input({props}) {
    return (
        <TextInput
            style={styles.input}
            mode={'outlined'}
            {...props}></TextInput>
    );
}

const styles = StyleSheet.create({
    input: {
        marginHorizontal: 8,
    },
});
