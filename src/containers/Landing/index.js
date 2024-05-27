import BaseLayout from "../../components/Layout/BaseLayout.jsx";
import {LANDING} from "../../constants/routes.js"
import Landing from "./containers/index.jsx";

export default () => [
    {
        path:LANDING,
        component:Landing,
        layout:BaseLayout
    }
]