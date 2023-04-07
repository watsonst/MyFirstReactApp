function Backdrop(props) {
    return <div className='backdrop' onClick={props.onCancel} />;
}

export default Backdrop;
//render the div to get the backdrop styling from index.css but nothing actually in the div