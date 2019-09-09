import React from 'react';
import '../css/todos.css'
import TodosItem from './TodosItem.jsx'
export default class Todos extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return <div id='box'>
                    <div id='title' className='Todos_div'>
                        <span  className='Todos_spanTodos'>todos</span>   
                    </div>

                    <div>
                        <TodosItem></TodosItem>  
                    </div>
                    <div className='Todos_SpanDouble'>
                        <div className='Todos_spanDouble'>Double-click to edit a todo Created by petehunt Part of TodoMVC</div>
                    </div>
               </div>
    }
}