import React from 'react';
import Tour from './Tour';
const Tours = ({tours}) => {
  return (
    <section>
      <div className="title">
        <h3>our tours</h3>
        <div className="underline"></div>
      </div>
      <div>{tours.map((tour)=>{
        return <Tour key={tour.id} {...tour}/>
      })}

      </div>
    </section>
  )
}

export default Tours;
