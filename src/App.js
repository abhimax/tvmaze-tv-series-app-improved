import { Button } from './components/Button';
import { SearchInput } from './components/SearchInput';

function App() {
  return (
    <div className="App">
      <Button label={'Search'} icon="<"/>
      <SearchInput placeholder="Search for TV shows"/>
    </div>
  );
}

export default App;
