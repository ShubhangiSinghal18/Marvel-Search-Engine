import React, { useRef } from 'react'

export default function SearchBar() {
    let input = useRef("");
  return (
    <form>
        <input type='text' placeholder='Search Your Hero...' ref={input}/>
        <button>GO</button>
    </form>

  )
}
