import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [cat, setCat] = useState(['Goku']);

    
    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategory setCat={setCat}/>
          <hr></hr>  

          <ol>
              {
                  cat.map(category => (
                  <GifGrid key = {category} category={ category}/>))
              }
          </ol>
        </>
    )
}
