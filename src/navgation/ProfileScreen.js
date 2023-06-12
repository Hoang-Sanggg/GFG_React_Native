import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, Button } from 'react-native'

const profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.container2}>
                    <Image style={styles.personalImg}

                        resizeMode="stretch"
                    >
                    </Image>
                </View>
                <View>
                    <View>
                        <Text style={styles.text2}>Jefro Suirop</Text>
                    </View>
                    <View>
                        <Text style={styles.text4}>JefroSuiropKu@gmail.com</Text>
                    </View>
                </View>
                <View>
                    <Button
                        title="Edit"
                        onPress={this.onPress}
                        style={styles.button}
                    />
                </View>

            </View>

            <View style={styles.container3}>
                <View style={styles.personaldataView}>
                    <Text style={styles.personaldataText1}>180cm</Text>
                    <Text style={styles.personaldataText2}>Height</Text>
                </View>

                <View style={styles.personaldataView}>
                    <Text style={styles.personaldataText1}>80kg</Text>
                    <Text style={styles.personaldataText2}>Weight</Text>
                </View>

                <View style={styles.personaldataView}>
                    <Text style={styles.personaldataText1}>22yo</Text>
                    <Text style={styles.personaldataText2}>Age</Text>
                </View>
            </View>
            <View style={{ marginLeft: 22, marginRight: 22, }}>
                <View>
                    <Text style={styles.text3}>
                        Mục tiêu tập luyện
                    </Text>
                </View>

            </View>

        </View>




    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',


    },
    container2: {
        marginTop: 74,
        marginLeft: 22,
        width: 94,
        height: 94,
    },
    container3: {

        flexDirection: "row",
        flex: 0,
        justifyContent: 'space-between',
        marginLeft: 22,
        marginRight: 22,
        marginTop: 24,

    },
    container4: {

    },
    text: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 700,
        color: '#FFFFFF',
        marginTop: 62,
    },
    text2: {
        marginLeft: 14,
        marginTop: 90,
        fontSize: 22,
        fontWeight: 600,
        color: '#FFFFFF',
    },
    textInput: {
        color: '#FFFFFF',
        fontSize: 20,
        paddingTop: 15,
        paddingBottom: 14,

    },
    text3: {
        marginTop: 45,
        fontSize: 22,
        fontWeight: 700,
        color: '#FFFFFF',
    },
    text4: {
        fontWeight: 500,
        fontSize: 16,
        color: '#FFFFFF',
        marginTop: 8,
        marginLeft: 14,
    },
    text5: {
        marginTop: 22,
        fontSize: 22,
        fontWeight: 300,
        color: '#FFFFFF',
    },
    personalImg: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    personaldataView: {
        borderRadius: 10,
        width: 94,
        height: 94,
        flex: 0,
        backgroundColor: '#434B53',
        justifyContent: 'center',
    },
    personaldataText1: {
        color: '#E0FE10',
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 600,
    },
    personaldataText2: {
        color: '#FFFFFF',
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 600,
    },
    button: {
        width: 50,
        height: 50,
        flex: 0,
        color: '#E0FE10',

    }
});
export default profile;
