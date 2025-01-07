import React from 'react'
import Button from './Button'

const ListCategory = ({state,setState}) => {
    const clicked = (e) => {
        state.splice(e,1)
        setState([...state])
    }
    return (
        <ul className='w-full space-y-2'>
            {state.map((e,i) => (
                <li key={i} className='flex justify-between items-center text-white bg-green-500 p-2 rounded-md'>
                    <div><span>{i + 1}</span>. {e.value} </div>
                    <div className='flex gap-2'>
                        <Button title={'edit'} extraClass={'!h-[30px] bg-yellow-300'}/>
                        <Button title={'delite'} onClick={() => clicked(i)} extraClass={'!h-[30px] bg-red-500'}/>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ListCategory
