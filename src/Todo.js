import { List, ListItem, ListItemAvatar, ListItemText, Button, Modal, Input} from '@material-ui/core'
import React, { useState } from 'react'
import './Todo.css'
import { makeStyles } from '@material-ui/core/styles';
import {db} from './firebase'


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      top: 0,
      left:0,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const Todo = (props) => {

    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState('')

    const handleOpen= () => {
        setOpen(true)
    }
    const handleClose= () => {
        setOpen(false)
    }

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo:input
        }, {merge:true})
        setOpen(false);
    }

    return (
        <>
        <Modal open={open} onClose={e => setOpen(false) } >
            <div className={classes.paper}>
                <h1 className="title"> What do you want to change 📌 </h1>
                <Input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <Button onClick={updateTodo} variant="contained" color="secondary">Update Todo</Button>
            </div>

        </Modal>
        <List className="todo-list">
            <ListItemAvatar>
            </ListItemAvatar>
            <ListItem>
                <ListItemText primary={props.todo.todo}  secondary="Tik Tak 🕑 Tik Tak 🕦"/>
            </ListItem>
            <Button onClick={e => setOpen(true)}variant="contained" color="secondary" > Edit </Button>
            <Button onClick={e => db.collection('todos').doc(props.todo.id).delete()} >❌ Delete Me !</Button>
        </List>
        </>
    )
}

export default Todo
