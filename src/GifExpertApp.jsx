import { useState } from 'react'
import { AddCategory, GifGrid } from './components';
/* 
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
 */

// kN9hi49OBHhws9s4gqJXCFvfFe0KGZQk
export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["First"])

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  return (
    <>
        { /* titulo */}
        <h1>GifExpertApp</h1>
        <AddCategory 
          onNewCategory = { (value) => onAddCategory(value)}
        />

        { /* Input */}
        { /* Listado de Gif */}
        
        {
          categories.map( (category) => (
            <GifGrid 
              key={category}
              category={category}
            />
          ))
        }

        { /* Gif Items */ }
    </>
  )
}
