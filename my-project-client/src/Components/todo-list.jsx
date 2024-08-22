export const Todolist = ({index, todo, toggleTodo, removeTodo}) =>{
const doToggle = () =>{
    toggleTodo(todo.id);
}
const doRemove = () =>{
    removeTodo(todo.id);
}

const isCompleted = todo.completed === 'complete';
return(      
              <li
                key={index}
                className={`flex justify-between items-center p-2 mb-2 rounded-md ${
                  isCompleted ? "bg-green-500" : "bg-blue-400 flex-wrap"
                }`}
              >
                <span className=" text-black">{todo.text}</span>
                <div className="flex justify-between">
                  <button
                    onClick={doToggle}
                    className={`${
                      isCompleted
                        ? "bg-green-800 hover:bg-green-900"
                        : "mx-2 bg-amber-500 hover:bg-amber-600"
                    } text-black p-1 rounded-md`}
                  >
                    {isCompleted ? "Done" : "Pending"}
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