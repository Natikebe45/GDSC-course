function Usecard(props){
    return(
       <div className="nati" style={{ backgroundColor: "green"}}>
           <p>Name : {props.name}</p>
           <p>age: {props.age}</p>
           <p>email: {props.email}</p>
       </div>
    )
   }
   export default Usecard;
   