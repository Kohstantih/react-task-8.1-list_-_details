import { useEffect, useState } from 'react';
import List from './components/LIst/List';
import Details from './components/Details/Details';
import getUsersList from './funcs/getUsersList';
import { TListItem } from './types/TListItem';
import { ClickButtonType } from './types/ClickButtonType';
import './App.css';

function App() {
  const [list, setList] = useState<TListItem[]>([]); 
  const [idDet, setidDet] = useState(null);

  const showDetails: ClickButtonType = (e) => {
    const { id } = e.target.dataset;
    if (!id) return;

    setidDet(id); // Ошибка
  }
  
  useEffect(() => {
    getUsersList(import.meta.env.VITE_APP_USERS_LIST)
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  return (
    <div className="users_info-box">
      <List list={list} activeId={idDet} onClick={showDetails}/>
      {idDet && <Details id={idDet} />}
    </div>
  )
}

export default App
