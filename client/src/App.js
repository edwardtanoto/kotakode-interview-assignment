import React, { useState } from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap'
import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';

function App() {
  const [tasks, setTasks] = useState([])
  const [dailyTarget, setDailyTarget] = useState(5)
  const [level, setLevel] = useState(0)
  const role = ['Newbie', 'Amateur', 'Regular']

  const addTask = (title, tasks, id, completed) => {
    const newTask = [...tasks, { id, title, completed }];
    setTasks(newTask);
    levelUp()
  };

  const deleteTask = (id) => {
    const newTask = [...tasks].filter(task => task.id !== id)
    setTasks(newTask)
  };

  const completeTask = (index, id) => {
    const confirm = window.confirm("Press OK to complete your task.")
    if (confirm) {
      const newTask = [...tasks];

      newTask[index].completed = !newTask[index].completed;
      setTasks(newTask);
      levelUp()
    }
    return
  };


  const completedTask = tasks.length === 0 ?
    0 : [...tasks].map(task => task.completed).reduce((a, b) => a + b) ? [...tasks].map(task => task.completed).reduce((a, b) => a + b) : '0'
  // The code prints out false if I dont use this line


  const totalTask = tasks.length

  const levelUp = () => {
    if (totalTask + 1 == dailyTarget || completedTask + 1 === dailyTarget) {
      setLevel(level + 1)
    }
  }


  return (

    <div className="container" >
      <div className="header">
        <h1 className="pt-5">Kotakode First Project</h1>
        <Row>
          <Col className="text-center">
            <p className="mt-5 ">
              Set your daily target
      <br />
              <input value={dailyTarget} style={{ width: "200px", borderRadius: '10px', background: 'transparent' }} className="daily-form pl-3" type="number" placeholder="5" onChange={(e) => setDailyTarget(e.target.value)} />
            </p>
          </Col>
          <Col xs={3} md={2}>
            Level: {`${level}`} <br />
            Role: {`${role[level]}`}
          </Col>
        </Row>

        <b>Achievements - Level Up</b>

        <ul>
          <li><b>Intern's Sprit</b> - Create to do according your daily target (<span>{totalTask + '/' + dailyTarget}</span>)</li>
          <li><b>Prouductive Day</b> - Finish your daily target (<span>{completedTask + '/' + dailyTarget}</span>)</li>
        </ul>
      </div>
      <TodoInput tasks={tasks} addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
    </div >
  );
}

export default App;
