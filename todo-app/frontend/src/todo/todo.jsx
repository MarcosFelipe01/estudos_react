import React from "react"
import axios from "axios";

import PageHeader from "../template/pageHeader"
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default function Todo(props){
    return(
        <div>
            <PageHeader name='Tarefas' small='Cadastro' />
            <TodoForm/>
            <TodoList/>
        </div>
    )
}