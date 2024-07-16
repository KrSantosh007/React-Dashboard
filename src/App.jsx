import { Outlet } from 'react-router-dom';
import './App.css';
import DashboardView from './components/DashboardView';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className="flex">
            <div className='basis-[12%] h-[100vh]'>
                <Sidebar/>
            </div>
            <div className='basis-[88%] border'>
                <DashboardView/>
                <div className='mt-[15px]'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
}

export default App;
