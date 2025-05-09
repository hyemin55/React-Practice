import { useState } from "react";

function App() {
  const [viewAccordion, setViewAccordion] = useState(false);

  return (
    <>
      <section className="AppSection">
        <div className="Title" onClick={()=>{setViewAccordion(!viewAccordion)}}>
          <h1>This is a title</h1>
          {viewAccordion && <h1>-</h1>}
          {!viewAccordion && <h1>+</h1>}
        </div>
        {viewAccordion && <div className="Content">This is a content</div>}
      </section>
    </>
  );
}

export default App;
