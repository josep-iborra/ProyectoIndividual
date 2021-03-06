import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Provider } from 'react-native-paper';
import Appbar_Common from '../components/Appbar_Common';
import { useTranslation } from "react-i18next";

const DocInput_Screen = ({ navigation }) => {
    const { t } = useTranslation();
    return (
        <Provider>
            <Appbar_Common OnPress={() => navigation.navigate("Main_Screen")} titulo={t("DocInput_Screen")} />
            <View style={styles.box}>
                <Surface style={styles.falseCard}>
                </Surface>
            </View>
        </Provider>
    );
}

export default DocInput_Screen;

const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: '#333333',
        height: Dimensions.get("screen").height,
        alignItems: "center"
    },

    falseCard: {
        backgroundColor: '#8A8A8A',
        borderRadius: 20,
        height: Dimensions.get("screen").height * 81 / 100,
        width: Dimensions.get("screen").width * 90 / 100,
        marginTop: Dimensions.get("screen").height * 2 / 100,
        padding: 10
    }
})