import Main from "./Main/Main";
import usersData from "./Main/usersData";

localStorage.setItem("users", JSON.stringify(usersData));


function App() {
  return <Main  users = {usersData}/>;
}

export default App;
