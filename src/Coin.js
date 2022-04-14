import React from 'react'

const Coin = ({name, icon, price, symbol}) => {
  return (
    <div className='coin'>
        <h1>Név: {name}</h1>
        <img src={icon} alt="coin" />
        <h3>Ár: {price*350} HUF</h3>
        <h3>Ikon: {symbol}</h3>
        <button>Vétel</button>
    </div>
  )
}

export default Coin