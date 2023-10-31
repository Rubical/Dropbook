import Header from "./layouts/Header";
import {theme} from "./styles/theme";
import {ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./router/routes";
import {store} from "./store/store";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    {routes.map(route => <Route key={route.path} path={route.path} element={<route.element/>}/>)}
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
        </Provider>
    );
}

export default App;
