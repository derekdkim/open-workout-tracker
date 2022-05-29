import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

// Redux store
import { Provider } from "react-redux";
import { store } from "./redux/store";

// UI Kitten Theme
import { default as theme } from "./themes/ui-kitten-theme.json";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";

export default function App() {
    const isLoadingComplete = useCachedResources();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider {...eva} theme={{ ...eva.dark }}>
                    <SafeAreaProvider>
                        <Provider store={store}>
                            <Navigation />
                            <StatusBar />
                        </Provider>
                    </SafeAreaProvider>
                </ApplicationProvider>
            </>
        );
    }
}
