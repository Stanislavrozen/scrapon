import { useState } from 'react';
import './css/App.css';
import Form from './form';
import axios from 'axios'
import View from './view';

function App() {

  const opts = [
    { name: "Название сайта", selector: "head title" },
    { name: "Заголовок страницы", selector: "h1" },
  ];

  const [scrap, setScrap] = useState();

  const sendQuery = async (params) => {

    var result = await axios.get("http://192.168.1.100:5001", { params: { ...params } });

    console.log(result.data)
    setScrap(result.data);
  }

  return (
    <div className="app">
      <div className="container">
        <div className="card">
          <h4>Все дойдем до клабика, потанцуем скрабика</h4>
          <Form sendQuery={sendQuery} opts={opts} />
          <View scrap={scrap} />
        </div>
      </div>
    </div>
  );
}

export default App;
