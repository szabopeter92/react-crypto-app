import './App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import Coin from './Coin';

function App() {

  const [coinList, setCoinList] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(()=>{

      Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
           .then( (response) => {
              setCoinList(response.data.coins)
            })
  }, [])

  const searchedCoin = coinList.filter((coin)=>{

      return coin.name.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <div className="App">
      
      <div className="cryptoHeader">
          <h1>Cryptovaluta kereső</h1>
          <input type="text" placeholder="Bitcoin..." onChange={(e)=>{

              setSearch(e.target.value);
          }}/>
      </div>


      <div className="cryptoContainer">
          {searchedCoin.map((coin)=>{

            return( 
                <Coin 
                  name={coin.name}
                  icon={coin.icon}
                  price={coin.price}
                  symbol={coin.symbol}  
                />
            )
          })}
      </div>


    </div>
  );
}

export default App;
