import { useEffect, useState } from 'react';
import axios from 'axios';
// == Import
import FormSearch from '../Form/FormSearch';
import Header from '../Header/Header';
import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';
import './styles.css';

// == Composant
function App() {
  const [inputValue, setInputValue] = useState('');
  const [repos, setRepos] = useState([]);
  const [totalRepos, setTotalRepos] = useState('');

  function fetchResults() {
    axios.get(`https://api.github.com/search/repositories?q=${inputValue}`)
      .then((response) => {
        setRepos(response.data.items);
        setTotalRepos(response.data.total_count);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("qqch à faire en cas de succès ou d'erreur");
      });
  }

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className="app">
      <Header />
      <FormSearch search={inputValue} setSearch={setInputValue} fetchResults={fetchResults} />
      <Message totalCount={totalRepos} />
      <ReposResults repos={repos} />
    </div>
  );
}

// == Export
export default App;
