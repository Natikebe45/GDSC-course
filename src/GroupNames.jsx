function GroupNames(){


const members = ['Natnael.k', 'Ametel', 'Meti', 'Yadiel', 'natnael.w'];
  
    return (
      <div>
        <h1>Group Members</h1>
        <ul>
          {members.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
    );
 
}  
  export default GroupNames;