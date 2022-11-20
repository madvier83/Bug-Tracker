import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';

import {
    Avatar,
    Button,
    Card,
    List,
    MD3DarkTheme,
    Paragraph,
    Text,
    TextInput,
    Title,
} from 'react-native-paper';
import {Provider as PaperProvider} from 'react-native-paper';
const theme = {
    ...MD3DarkTheme,
};

function App() {
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState('');

    async function getProjects() {
        const oldProjects = await AsyncStorage.getItem('@projects');
        if (oldProjects) {
            setProjects(JSON.parse(oldProjects));
        } else {
            AsyncStorage.setItem('@projects', JSON.stringify(projects));
        }
    }
    useEffect(() => {
        getProjects();
    }, []);

    async function addProject() {
        if (project) {
            let newProject = {
                id: Math.floor(Math.random() * Date.now()),
                name: project,
            };
            let newProjects = projects;
            newProjects.unshift(newProject);
            AsyncStorage.setItem('@projects', JSON.stringify(newProjects));
            setProject('');
            getProjects();
        }
    }

    async function clearStorage() {
        AsyncStorage.setItem('@projects', JSON.stringify([]));
        console.log('cleared');
        console.log(projects);
        getProjects();
    }

    return (
        <PaperProvider>
            <SafeAreaView
                style={{backgroundColor: '#2e2e2e', minHeight: '100%'}}>
                <StatusBar backgroundColor="#2e2e2e"></StatusBar>
                <ScrollView>
                    <View style={[styles.margin]}>
                        {/* <Text
                            style={[styles.margin, {marginTop: 16}]}
                            variant="headlineLarge">
                            Bug Tracker
                        </Text> */}
                        <Card
                            mode="elevated"
                            style={[
                                styles.margin,
                                {borderRadius: 4, padding: 8},
                            ]}>
                            <Card.Content>
                                <Text variant="headlineSmall">
                                    Bug Tracker App 🐞
                                </Text>
                                <Paragraph>
                                    List your buggy projects here!
                                </Paragraph>
                                <TextInput
                                    value={project}
                                    onChangeText={setProject}
                                    style={[{marginVertical: 16}]}
                                    mode={'outlined'}
                                    activeOutlineColor="#f04444"
                                    label="Project Name"></TextInput>
                                <Button
                                    style={[
                                        {
                                            borderRadius: 4,
                                            backgroundColor: '#f04444',
                                        },
                                    ]}
                                    mode="contained"
                                    onPress={addProject}>
                                    Add Project
                                </Button>
                            </Card.Content>
                        </Card>

                        {/* <Text>{JSON.stringify(projects)}</Text> */}
                        {projects.length ? (
                            projects?.map((obj, index) => (
                                <Card
                                    key={obj.id}
                                    elevation={1}
                                    style={[
                                        styles.margin,
                                        {borderRadius: 4, padding: 8},
                                    ]}>
                                    <Card.Content>
                                        <View
                                            style={[
                                                styles.flex,
                                                {marginBottom: 4},
                                            ]}>
                                            <Avatar.Text
                                                size={32}
                                                label={obj.name[0]}
                                                style={[{marginRight: 16}]}
                                            />
                                            <Title>{obj.name}</Title>
                                        </View>

                                        <View>
                                            <List.Section>
                                                <List.Accordion title="Bugs">
                                                    {/* left={() => (
                                                        <List.Icon
                                                            icon="bug"
                                                            color="red"></List.Icon>
                                                    )} */}
                                                    <List.Item
                                                        title="First bug"
                                                        description="Lorem Ipsum dolor"
                                                    />
                                                    <List.Item
                                                        title="Second bug"
                                                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                                    />
                                                </List.Accordion>
                                                <List.Accordion title="Changes">
                                                    {/* left={() => (
                                                        <List.Icon
                                                            icon="file-edit"
                                                            color="orange"></List.Icon>
                                                    )} */}
                                                    <List.Item
                                                        title="First bug"
                                                        description="Lorem Ipsum dolor"
                                                    />
                                                    <List.Item
                                                        title="Second bug"
                                                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                                    />
                                                </List.Accordion>
                                            </List.Section>
                                        </View>

                                        <Button
                                            mode="contained-tonal"
                                            style={{
                                                borderRadius: 4,
                                                // backgroundColor: '#f04444',
                                            }}>
                                            Details
                                        </Button>
                                    </Card.Content>
                                </Card>
                            ))
                        ) : (
                            <Text></Text>
                        )}

                        <Button
                            style={[styles.margin, {borderRadius: 4}]}
                            mode="text"
                            onPress={clearStorage}>
                            Reset
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
    flex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default App;
