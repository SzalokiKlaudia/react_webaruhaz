
import React from 'react'
import './Termek.css'

function Termek(props) {

    function kattKosarTermek(){
        console.log("katt termék",props.index)
        props.kattKosar(props.kartya,props.index)//átadtam a termék objektzumot amire kattintottam, és az indexét is a szülőnek
        //fontos hogy a szülőelem fgv-ét hívd

    }

  return (
  
  
    <div className="card kivalaszt col-lg-4 col-md-6 col-sm-12">
        <div className='card-body'>
            <h3>
               {props.kartya.name}       {/*átadtam a listaelem értékeit a megjelenítésre */}
            </h3>
            <div className='card-img-holder'>
                <div>
                     <img className="card-img-top" src={`/kepek/${props.kartya.picture}`} alt={props.kartya.name} /> {/*nem kell hivatkozni a public mappára, automatikusan a gyökér kvtból keresi meg */}
                    
                </div>
                <div>
                    <p>
                        {props.kartya.description}
                    </p>
                </div>
                <div className="kosar-elemek d-flex justify-content-between">
                                                <button className="btn" onClick={()=>{kattKosarTermek()}}>
                                                    Kosárba
                                                </button>
                                                <h5 className="price">
                                                    Ár: {props.kartya.price} Ft 

                                                </h5>
                                            
                </div>

            </div>


        </div>



    </div>
  )
}

export default Termek
