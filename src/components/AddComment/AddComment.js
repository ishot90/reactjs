import {useState} from "react";


const AddComment = (props) => {

    const {taskId,tasks} = props;
const [value,setValue] = useState("");

    const add = () => {
        console.log(taskId);
      console.log(tasks);
      tasks.map((s) => {
          if(s.id === taskId){
           console.log(value);
          }
          return s;
      })

    };
    return (
        <div>
            <input type="text"  value={value} onChange={(evt) => {
              setValue(evt.target.value);
            }} />
            <button onClick={add}>Add


            </button>
        </div>
    )
}

export default AddComment;