import KosarTermekek from './KosarTermekek';
import React from 'react'



function Aside() {
 
  
  return (
    <div>
        <article>
            <p>A kosár tartalma:</p>
            <p>A kosárban db termék van</p>
            <p>Összérték: </p>
        </article>

        <div className="kosarTermekek">
            <KosarTermekek/>
        </div>
    </div>
    

   
  )
}

export default Aside
