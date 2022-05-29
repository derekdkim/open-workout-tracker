import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { RootTabScreenProps } from "../types";
import { Layout, Text, useTheme } from "@ui-kitten/components";

export default function StatisticsPage({ navigation }: RootTabScreenProps<"Statistics">) {
    const theme = useTheme();

    return (
        <Layout style={styles.container}>
            <Text style={styles.title}>Statistics</Text>
            <Layout style={styles.separator} />
            <EditScreenInfo path="/screens/StatisticsPage.tsx" />
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
