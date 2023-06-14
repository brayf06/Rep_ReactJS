export default function Button({onClick, children}) {
  
  // function handleClick(){
  //   onClick();
    
  // }

    return (
      <button className="btn btn-outline-secondary rounded-0" onClick={onClick} > {children} </button>
    );
  }
