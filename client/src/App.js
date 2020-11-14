import React, { useState } from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap'
import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';
import { Level } from './components/Level';
import { DailyTarget } from './components/DailyTarget';

function App() {
  // can use context API for better scaling and cleaner code
  // I'll use props drilling as first solution
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

  const completeTask = (index) => {
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
    <div className="container" >
      <div className="header">
        <h1 className="pt-5">Kotakode First Project (with Contex)</h1>
        <Row>
          <Col className="text-center">
            <p className="mt-5 ">
              <DailyTarget dailyTarget={dailyTarget} setDailyTarget={setDailyTarget} />
            </p>
          </Col>
          <Col xs={3} md={2}>
            <Level role={role} level={level} />
          </Col>
        </Row>
        {/* can make it a JSON file */}
        <b>Achievements - Level Up</b>
        <ul>
          <li><b>Start the day</b> - Create task according your daily target (<span>{totalTask + '/' + dailyTarget}</span>)</li>
          <li><b>Prouductive Day</b> - Finish your daily target (<span>{completedTask + '/' + dailyTarget}</span>)</li>
        </ul>
      </div>
      <TodoInput tasks={tasks} addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
    </div >
  )
}

export default App;
