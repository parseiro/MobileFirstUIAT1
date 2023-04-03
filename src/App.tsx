import './App.css'
import {Head} from "./Head";
import {Sidenav} from "./Sidenav";
import {MainOverview} from "./MainOverview";

export default function App() {
    return (
        <>
            <Head/>
            <main className="principal">
                <Sidenav/>
                <MainOverview/>
            </main>
        </>
    )
}
