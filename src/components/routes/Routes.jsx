import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";


const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                
            }
        ]
    },
    {
        path:'*',
        element:<div>ErrorPAge</div>
    }
])

export default routes;