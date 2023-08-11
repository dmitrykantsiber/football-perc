import { useState } from "react";
import "./App.css";
import Change13 from "./components/Change13";
import Change20 from "./components/Change20";
import Change from "./components/Change20";
import Change6 from "./components/Change6";
import Change10 from "./components/Change10";


import Table13 from "./components/Table13/Table13";
import Table10 from "./components/Table10/Table10";
import Table20 from "./components/Table20/Table20";
import Table6 from "./components/Table6/Table6";

function App() {
  const [table, setTable] = useState(2);

  if (table === 0) {
    return (
      <>
        <Change20 setTable={setTable} />
        <Change13 setTable={setTable} />
	<Change10 setTable={setTable} />
        <Change6 setTable={setTable} />
        <Table20 />
      </>
    );
  }
  if (table === 1) {
    return (
      <>
        <Change20 setTable={setTable} />
        <Change13 setTable={setTable} />
<Change10 setTable={setTable} />
        <Change6 setTable={setTable} />
        <Table13 />
      </>
    );
  }
  if (table === 2) {
    return (
      <>
        <Change20 setTable={setTable} />
        <Change13 setTable={setTable} />
<Change10 setTable={setTable} />
        <Change6 setTable={setTable} />
        <Table6 />
      </>
    );
  }
if (table === 3) {
    return (
      <>
        <Change20 setTable={setTable} />
        <Change13 setTable={setTable} />
<Change10 setTable={setTable} />
        <Change6 setTable={setTable} />
        <Table10 />
      </>
    );
  }

}

export default App;
