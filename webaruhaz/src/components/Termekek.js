
import React from 'react'
import Termek from './Termek'

function Termekek(props) {

    function kattKosar(adat,index){//megkapta a termékből a kartyát és indexet

        console.log("Termékek",adat,index)
        props.katt(adat,index)//továbbítja az appnak a két adatot
    }
  return (
    <>

        {
            props.lista.map((elem,index) => {
                return <Termek kartya={elem} key={elem.id} index={index} kattKosar={kattKosar} />
            })


        }
    
    
    </>
  )
}

export default Termekek