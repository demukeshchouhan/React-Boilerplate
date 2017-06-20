import React from 'react';

export default class AddTodo extends React.Component {
	constructor(props){
		super(props);
		this.handleAddTaskSubmit = this.handleAddTaskSubmit.bind(this);
	}

	handleAddTaskSubmit(e){
		e.preventDefault();
		let addNewTask = this.refs.addNewTask.value;
		let {handleSubmit} = this.props;
		if(addNewTask.length > 0){
			this.refs.addNewTask.value = "";
			handleSubmit(addNewTask);
		}else{
			this.refs.addNewTask.focus();
		}
	}

	render() {
	    return (
	      <div>
	      	<form onSubmit={this.handleAddTaskSubmit}>
	      		<div className="form-group">
	      			<input 
	      				type="text"
	      				className="form-control"
	      				placeholder="Please enter your new task"
	      				ref="addNewTask"
	      			/>
	      		</div>
	      		<div className="form-group">
	      			<button className="btn btn-default">Add</button>
	      		</div>
	      	</form>
	      </div>
	    );
	}
}
