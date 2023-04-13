import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouter } from "./routers/";

function App() {
    return (
        <Router>
            <Routes>
                {publicRouter.map((route, index) => {
                    let Layout = route.layout;
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page></Page>
                                </Layout>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
