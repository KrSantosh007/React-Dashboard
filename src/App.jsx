import { Outlet } from 'react-router-dom';
import './App.css';
import DashboardView from './components/DashboardView';
import Sidebar from './components/Sidebar';
import Footer  from './components/Footer';

function App() {
    return (
        <div className="flex">
            <div className='basis-[12%] h-[100vh]'>
                <Sidebar/>
            </div>
            <div className='basis-[88%] border h-[100vh] overflow-scroll'>
                <DashboardView/>
                <div className='mt-[15px]'>
                    <Outlet></Outlet>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
