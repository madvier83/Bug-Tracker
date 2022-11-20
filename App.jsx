import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';

import {Button, MD3DarkTheme, Text, TextInput} from 'react-native-paper';
import {Provider as PaperProvider} from 'react-native-paper';

const theme = {
    ...MD3DarkTheme,
};
function App() {
    return (
        <PaperProvider theme={theme}>
            <SafeAreaView>
                <ScrollView>
                    <View style={[styles.margin]}>
                        <Text
                            style={[styles.margin, {color: 'white'}]}
                            variant="headlineLarge">
                            Bug Tracker
                        </Text>
                        <TextInput
                            style={styles.margin}
                            mode={'outlined'}
                            label="Create Project"></TextInput>
                        <Button
                            style={[styles.margin, {borderRadius: 4}]}
                            mode="contained">
                            +
                        </Button>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    margin: {
        margin: 8,
    },
});

export default App;
