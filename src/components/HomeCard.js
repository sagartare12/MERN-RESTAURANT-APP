import React from 'react'
import { Link } from 'react-router-dom';

const HomeCard=({name,image,category,price,isLoading,id})=>{
    console.log(name);
    return (
        <div className="bg-white shadow-md p-2 min-w-[150px] max-h-[280px]">
            {name ?
                <div>
                    <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0",behavior:"smooth"})}>
                     <div className="w-40 min-h-[140px] max-h-[150px]">
                        <img src={image} alt="" className="h-full w-full"/>
                     </div>
                     <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">{name}</h3>
                     <p className="text-center text-slate-500 font-medium">{category}</p>
                     <p className="text-center font-bold"><span className='text-red-500 font-md'>₹ </span><spna>{price}</spna></p>
                    </Link>
                </div> :
                <div className="flex justify-center items-center h-full"><p>{isLoading}</p></div>
                
            }
           
        </div>
    )
}
export default HomeCard;