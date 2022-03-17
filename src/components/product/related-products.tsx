import React from 'react';
import { Product } from "../../interfaces";

// interface Props {
//   entity: Product[];
//   onClick: (id:string)=> void; 
// }

export function RelatedProducts({entity, onClick}): JSX.Element {
  const handleClick = ({target}) => onClick(target.value);
  const optionsList = entity.map((product:Product) => {
    <li key={product.id} value={product.id} onClick={handleClick}>{product.title}</li>
  });

  return(
    <div className="container">
      <ul>{optionsList}</ul>
    </div>
  )
}
