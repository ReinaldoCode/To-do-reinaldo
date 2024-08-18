export const Todolist = ({index, todo, toggleTodo, removeTodo}) =>{
const doToggle = () =>{
    toggleTodo(index);
}
const doRemove = () =>{
    removeTodo(index);
}

return(
            
              <li
                key={index}
                className={`flex justify-between items-center p-2 mb-2 rounded-md ${
                  todo.completed ? "bg-green-500" : "bg-blue-400 flex-wrap"
                }`}
              >
                <span className=" text-black">{todo.text}</span>
                <div className="flex justify-between">
                  <button
                    onClick={doToggle}
                    className={`${
                      todo.completed
                        ? "bg-green-800 hover:bg-green-900"
                        : "mx-2 bg-amber-500 hover:bg-amber-600"
                    } text-black p-1 rounded-md`}
                  >
                    {todo.completed ? "Done" : "Pending"}
                  </button>
                  <button
                    onClick={doRemove}
                    className="mx-2 bg-red-500 text-black p-1 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
           
          
)
}