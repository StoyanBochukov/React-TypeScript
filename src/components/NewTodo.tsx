import React, { useRef } from 'react'

const NewTodo: React.FC<{onAddTodo:(text: string) => void }> = (props) => {

    const todoTextRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredText = todoTextRef.current!.value;
        if(enteredText?.trim().length === 0){
            return;
        }else{
            props.onAddTodo(enteredText)
        }
    }

  return (
   <form onSubmit={submitHandler}>
    <label htmlFor='text'>Todo Text</label>
    <input type="text" id='text' ref={todoTextRef} />
    <button>Add Todo</button>
   </form>
  )
}

export default NewTodo