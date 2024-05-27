import Landing from "./Landing"
import Test from "./Test"

const tester = () => [
    ...Landing(),
    ...Test()
]

const Routes = () => [...tester()]

export default Routes