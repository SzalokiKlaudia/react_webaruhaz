
import React from 'react'
import Termek from './Termek'

function Termekek(props) {
  return (
    <>

        {
            props.lista.map((elem,index) => {
                return <Termek kartya={elem} key={elem.id} index={index} />
            })


        }
    
    
    </>
  )
}

export default Termekek