import { useState, useEffect } from 'react';
import './App.css';
import {Button, FormControl,Input, InputLabel} from '@material-ui/core'
import Todo from './Todo';
import { db } from './firebase'
import firebase from 'firebase'
import Footer from './Footer'

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect( () => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ( {id:doc.id ,todo: doc.data().todo}) ) )
    } )
  }, [] )


  const addTodo = (e) => {
    e.preventDefault();
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    //setTodos([...todos, input]);  
    setInput('');
  }
  return (
    <div className="App">
      <div className="height"> 
      <h1 className="app-title">What will we do today ?📝</h1>
      <form className="form-flex">
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} className="app-input"/>
        </FormControl>
          <Button variant="contained" color="primary" type="submit" onClick={addTodo} disabled={!input}>
            Add Todo📎
          </Button>
      </form>
      <ul>
        {todos.map(todo  => (
          <Todo todo={todo}/>
        ) )}
      </ul>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
