import React from 'react'

export default function TodoItem(props) {

    

    const editValue=()=>{

    }

    const deleteItem=()=>{

    }

  return (
    <div className='p-2'>
        <div className='flex justify-between items-center'>
            <div className='text-md'>
                {props.value}
            </div>
            <div className='flex justify-center items-center'>
                <div className='text-sm p-5 text-green-900 font-bold cursor-pointer'>
                    <span onClick={editValue}>Edit</span>
                </div>

                <div className='text-sm p-5 text-red-950 font-bold cursor-pointer'>
                    <span onClick={deleteItem}>Delete</span>
                </div>
            </div>
        </div>
    </div>
  )
}
