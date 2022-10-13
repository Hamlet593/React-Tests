// import "./style.css/App.css";
// import { useReducer } from "react";
// import TodoList from "./TodoList";
// import TodoForm from "./TodoForm";
// import TodoFooter from "./TodoFooter";

// import { useState } from "react";

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

// * * *

// import "./style.css/App.css";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const GetToken = async () => {
//   const response = await axios({
//     method: "post",
//     url: "https://devapi.kinodaran.com:9090/auth",
//     data: {
//       email: "hamlet@advancedtech.am",
//       password: "Grqamolutyun93$",
//     },
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   return response.data;
// };

// async function getPosts() {
//   let myToken = await GetToken();
//   console.log(myToken);
//   const data = await axios({
//     url: "https://devapi.kinodaran.com:9090/home/posters",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `bearer ${myToken.token}`,
//     },
//   });
//   return data.data.content;
// }

// function App() {
//   const [images, setImages] = useState([]);

//   const getImages = () => {
//     getPosts().then((data) => setImages(data));
//   };

//   useEffect(() => {
//     getImages();
//   }, []);

//   return (
//     <div className="App">
//       {images.map((image) => {
//         return (
//           <div key={image.id}>
//             <img src={image.image.types[2].url} alt="posters" />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default App;

// * * *

import { useState } from "react";
import "./style.css/App.css";
import VideoPlayer from "./VideoPlayer";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App"> 
      <input
        type="text"
        value={text}
        onChange={({ target }) => {
          setText(target.value);
        }}
      />
      <span>{text}</span>
      <VideoPlayer src='https://www.w3schools.com/html/mov_bbb.mp4'/>
    </div>
  );
}

export default App;
