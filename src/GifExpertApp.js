import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punh', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', ]);

    // const handleAdd = () => {
    //     //setCategories([...categories, 'HunterX']);
    //     setCategories(cat => [...cat, 'HunterX']);
    // }

    return (
        <>            
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr/>
        
        <ol>
            {
                // categories.map((category, idx) => {
                //     return <li key={category}> {category} </li>
                // })

                categories.map(category => (
                    <GifGrid 
                        key = {category}
                        category = {category}/>
                ))
            }
        </ol>
            </>
    )
}

export default GifExpertApp;
