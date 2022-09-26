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
import { useEffect, useState } from "react";

const GetToken = async () => {
  const response = await axios({
    method: "post",
    url: "https://devapi.kinodaran.com:9090/auth",
    data: {
      email: "hamlet@advancedtech.am",
      password: "Grqamolutyun93$",
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

async function getPosts() {
  let myToken = await GetToken();
  const data = await axios({
    url: "https://devapi.kinodaran.com:9090/home/posters",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${myToken.token}`,
    },
  });
  console.log(data);
  return data.data.content;
}

function App() {
  const [images, setImages] = useState([]);

  const getImages = () => {
    getPosts().then((data) => setImages(data));
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="App">
      {images.map((image) => {
        return (
          <div key={image.id}>
            <img src={image.image.types[2].url} alt="posters" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
