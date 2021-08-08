import React,{useState,useRef,useEffect} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')
    
    const inputRef=useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    })

    const handleChange=e=>{
        setInput(e.target.value);
    };

    const handelSubmit=e=>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random() * 1000),
            text:input
        });
        setInput('');
    };
    return (
        <form className='todo-form' onSubmit={handelSubmit}>
        <input type='text' 
        placeholder='Add to do' 
        name='text' value={input} 
        className='todo-input' 
        onChange={handleChange}
        ref={inputRef}
        />
        <button className='todo-button'>Add</button>
        </form>
    )
}

export default TodoForm
