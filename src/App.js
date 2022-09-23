// import "./style.css/App.css";
// import { useReducer } from "react";
// import TodoList from "./TodoList";
// import TodoForm from "./TodoForm";
// import TodoFooter from "./TodoFooter";

// function reducer(state, action) {
//   if (action.type === "add") {
//     return [
//       ...state,
//       {
//         id: Math.random(),
//         text: action.payload.text,
//         isCompleted: false,
//       },
//     ];
//   } else if (action.type === "delete") {
//     return state.filter((todo) => todo.id !== action.payload.id);
//   } else if (action.type === "change") {
//     return state.map((todo) => {
//       if (todo.id === action.payload.id) {
//         return {
//           ...todo,
//           isCompleted: !todo.isCompleted,
//         };
//       } else return todo;
//     });
//   } else if (action.type === "clear") {
//     return state.filter((todo) => !todo.isCompleted);
//   }
// }

// function App() {
//   const [todos, dispatch] = useReducer(reducer, [
//     {
//       id: Math.random(),
//       text: "Learn JS",
//       isCompleted: false,
//     },
//     {
//       id: Math.random(),
//       text: "Learn CSS",
//       isCompleted: false,
//     },
//     {
//       id: Math.random(),
//       text: "Learn React",
//       isCompleted: false,
//     },
//   ]);

//   return (
//     <div className="App">
//       <header>
//         <h1 className="todoAppTitle">todos</h1>
//       </header>
//       <TodoForm
//         onAdd={(text) => {
//           dispatch({
//             type: "add",
//             payload: {
//               text,
//             },
//           });
//         }}
//       />
//       <TodoList
//         todos={todos}
//         onDelete={(id) => {
//           dispatch({
//             type: "delete",
//             payload: {
//               id,
//             },
//           });
//         }}
//         onChange={(id) => {
//           dispatch({
//             type: "change",
//             payload: {
//               id,
//             },
//           });
//         }}
//       />
//       <TodoFooter
//         todos={todos}
//         onClearCompleted={() => {
//           dispatch({
//             type: "clear",
//           });
//         }}
//       />
//     </div>
//   );
// }

// export default App;

// import React, { useContext } from "react";
// import "./style.css/App.css";

// function Comp3() {
//   return <Comp2 />;
// }

// function Comp2() {
//   const value = useContext(CountryContext);
//   return value;
// }

// const CountryContext = React.createContext();

// function App() {
//   return (
//     <div className="App">
//       <CountryContext.Provider value={[6]}>
//         <Comp3 />
//       </CountryContext.Provider>
//     </div>
//   );
// }

// export default App;

import "./style.css/App.css";
import axios from "axios";

function App() {
  axios
    .get("https://fortniteapi.io/v3/challenges", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "489b0f7b-4d48c21b-50dff77b-1e8e62f9",
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => console.log(err));
  return <div className="App">Hamo</div>;
}

export default App;
