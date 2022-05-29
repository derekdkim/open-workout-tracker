import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { Text, Layout, useTheme } from "@ui-kitten/components";

import EditScreenInfo from "../components/EditScreenInfo";

export default function ModalScreen() {
    return (
        <Layout style={styles.container}>
            <Text style={styles.title}>Modal</Text>
            <Layout style={styles.separator} />
            <EditScreenInfo path="/screens/ModalScreen.tsx" />

            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
