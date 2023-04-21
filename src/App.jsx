import * as React from "react";

const INITIAL_LIST = [
  {
    id: "1",
    firstName: "Robin",
    lastName: "Wieruch",
  },
  {
    id: "2",
    firstName: "Aiden",
    lastName: "Kettel",
  },
  {
    id: "3",
    firstName: "Jannet",
    lastName: "Layn",
  },
];

const App = () => {
  const [list, setList] = React.useState(INITIAL_LIST);

  return <div className='text-red-300'> render my drag and drop list </div>;
};

export default App;
