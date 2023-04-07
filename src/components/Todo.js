function Todo(props) {
  function deleteHandler(){
      console.log('Clicked!');
      console.log(props.text);
  }


  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>Delete</button> 
      </div>
    </div>
  );
}

export default Todo; //Have to export it to be usuable by other components. Start function name with Capital
//deleteHandler is NOT executed on line 9, no (). Just points to function. Only want to execute function when button is clicked, not when js evaluates the code at the start