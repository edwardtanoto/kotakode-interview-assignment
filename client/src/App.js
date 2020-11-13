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
    const confirm = window.confirm("Are you sure you want to delete this task?")
    if (confirm) {
      const newTask = [...tasks].filter(task => task.id !== id)
      setTasks(newTask)
    }
    return
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


  const completedTask = tasks.length === 0 ? 0 : [...tasks].map(task => task.completed).reduce((a, b) => a + b)
  // The code prints out false/ true at first prints


  const totalTask = tasks.length

  const levelUp = () => {
    if (totalTask + 1 == dailyTarget || completedTask + 1 === dailyTarget) {
      setLevel(level + 1)
      window.alert(`Congrats! You've leveled up to Level ${level + 1}. You are now a ${role[level + 1]}, keep being productive!`)
    }
  }


  return (
    // Can be split into smaller components of Daily Targets and Achievements n Levels up
    <div className="container" >
      <div className="header">
        <h1 className="pt-5">Kotakode First Project</h1>
        <Row>
          <Col className="text-center">
            <p className="mt-5 ">
              Set your daily target
      <br />
              {/* Have not done the negative validaiton */}
              <input value={dailyTarget} min={0} style={{ width: "200px", borderRadius: '10px', background: 'transparent' }} className="daily-form pl-3" type="number" placeholder="5" onChange={(e) => setDailyTarget(e.target.value)} />
            </p>
          </Col>
          <Col xs={3} md={2}>
            Level: {`${level}`} <br />
            Role: {`${role[level]}`}
          </Col>
        </Row>

        <b>Achievements - Level Up</b>

        <ul>
          <li><b>Intern's Sprit</b> - Create task according your daily target (<span>{totalTask + '/' + dailyTarget}</span>)</li>
          <li><b>Prouductive Day</b> - Finish your daily target (<span>{completedTask + '/' + dailyTarget}</span>)</li>
        </ul>
      </div>
      <TodoInput tasks={tasks} addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
    </div >
  );
}

export default App;
