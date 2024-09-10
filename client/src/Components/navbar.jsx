export const NavBar = () => {
  return (
    <div className="flex pt-2 justify-center">
      <div className="flex flex-wrap h-10  w-5/6 rounded-md justify-between  bg-blue-400">
        <div className="pl-6">
          <h1 className="pt-2">Welcome to your To-Do List</h1>
        </div>
        <div className="pr-6 pt-2">
          <button className="bg-red-400 hover:-translate-y-1 hover:scale-110 rounded-md w-20 h-6">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
