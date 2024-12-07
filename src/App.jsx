import './App.css';
// Components
import { Header } from './components/Header';
import { CodeForInterview } from './components/CodeForInterview';
import { Allinterviewers } from './components/AllInterviewers';
import { AddInterviewer } from './components/AddInterviewer';
import { EditInterviewer } from './components/EditInterviewer';
// Router
import { Routes, Route } from 'react-router';

function App() {

  return (
    <>
    <div className='container'>
      <Header/>

      <Routes>
        <Route path='/' element={<CodeForInterview/>} />

        <Route path='/all' element={<Allinterviewers/>} />

        <Route path='/add' element={<AddInterviewer/>} />

        <Route path='/edit/:id' element={<EditInterviewer/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
