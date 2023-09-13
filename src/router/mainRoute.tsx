import { createBrowserRouter } from "react-router-dom";
import LayOut from "../components/common/LayOut";
import About from "../pages/About";

export const mainRouter = createBrowserRouter([
    {
        path : "/",
        element : <LayOut />,
        children : [
            {
                index : true,
                element : <About />
            }
        ]
    }
])