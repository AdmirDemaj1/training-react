function FamilyMembersComponent(props){
    return (
      <li>
      <img src={props.image} />
      <h3> {props.name}</h3>
      <p>{props.hobbies}</p>
      </li>
    )
  } 

  export default FamilyMembersComponent;