
import authProvider from './authProvider';
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser,} from 'react-admin';
import { fetchUtils } from 'ra-core';
import Dashboard from './Dashboard';
import simpleRestProvider from 'ra-data-simple-rest';
import { UserCreate, UserEdit, UserList} from './user'

const dataProvider = simpleRestProvider('http://localhost:8000/api/admin', fetchUtils.fetchJson, 'X-Total-Count')
console.log(dataProvider)
const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="user" list={UserList}  edit={UserEdit} create={UserCreate}/>
    <Resource name="kelompoks" list={ListGuesser} />
  </Admin>
  );

export default App;