import KosarTermekek from './KosarTermekek';
import React from 'react'



function Aside(props) {

    const {kosarLista} = props // destrukturálás,kinyerem a propsból a listát


        let szamlalo = 0
        let vegosszeg = 0
        const termeklista = []
        
            kosarLista.forEach(elem => {
                vegosszeg+= elem.termek.price
                termeklista.push(elem.termek.name)
                
                

                 
                    
       });

       //console.log(termeklista)

       

    
 

  
  return (
    <div>
        <article>
        <p>A kosár tartalma: </p>
        <p>A kosárban {kosarLista.length} db termék van</p>

        {kosarLista.map((elem, index) => (
            <div key={index}>
                <p>{elem.termek.name} - {elem.termek.price} Ft</p> 
            </div>
        ))}
            <p>Végösszeg: {vegosszeg} Ft</p>
      
            
         
        
        </article>

        {/* <div className="kosarTermekek">
            <KosarTermekek kosarLista={kosarLista} vegOsszeg={vegOsszeg}/>
        </div> */}
    </div>
    

   
  )
}

export default Aside
