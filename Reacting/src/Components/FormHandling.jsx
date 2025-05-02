import React , { useRef } from 'react'

function FormHandling () {
    const name = useRef(null);
    const age = useRef(null);
    const email = useRef(null);

    const handleSubmit = (details) => {
        details.preventDefault();
        console.log(name.current.value, age.current.value, email.current.value);
    }


  return (
    <form action="" onSubmit={handleSubmit}>
        <input ref={name} type="text" placeholder='name' />
        <input ref={age} type="text" placeholder='age' />
        <input ref={email} type="text" placeholder='email' />
        <input type="submit" />
    </form>
  )
}

export default FormHandling
