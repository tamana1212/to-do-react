import React from 'react'

export default function Counter({todos}) {
  
    if (todos.length === 0){
        return (
            <div>
                <h1 className='counter'>No more tasks!</h1>
            </div>
        )
    }

    return (
    <div>
        <h1 className='counter'>Just {todos.length} more to go!</h1>
    </div>
  )
}
