import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

function App(){
    
const data = [
    {name: 'John C.', salary: 8000, increase: false},
    {name: 'Alex M', salary: 3000, increase: true},
    {name: 'Carl W.', salary: 5000, increase: false},
    ];

    return (
        <div className="app">
            <AppInfo></AppInfo>

            <div className="search-panel">
                <SearchPanel></SearchPanel>
                <AppFilter></AppFilter>
            </div>
            <EmployersList data={data}/>
            <EmployersAddForm></EmployersAddForm>
        </div>
    );
}

export default App;