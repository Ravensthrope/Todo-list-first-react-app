import React, { useState } from 'react';
import './Todo.css';

function Todo() {
  const [task, settask] = useState('');
  const [mainTask, setMainTask] = useState([]);

  let renderTask = <h3>No task available</h3>;

  if(mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return <>
          <ol key={i} class='list'>
            <h3>{t.task}</h3>
            <button className='del-btn' onClick={() => {
              deleteHandler(i);
            }}>Delete</button>
          </ol>
      </>
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { task }]);
    console.log(mainTask);
    settask("");
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  }


  return (
    <>
      <form className='input-box' onSubmit={submitHandler}>
        <input type="text" className='input-field' placeholder='Enter task' value={task} onChange={(e) => {
          settask(e.target.value);
        }} />
        <button className='add-btn'>Add task</button>
      </form>

      <div className='render-task'>
          {renderTask}
      </div>
    </>
  );
}

export default Todo;
