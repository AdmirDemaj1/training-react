import Header from "./components/Header/Header.jsx";
import Tabs from "./components/Tabs.jsx";

//Single responsibility principle
  function Post() {
    return  <div> <Header/> 
    
    {/* <Tabs>{<div>
      <button>Testtt</button></div>}</Tabs>  */}

      <section id="examples">
      <h2>My Knowledges</h2>
      <menu>
        <Tabs>React js</Tabs>
        <Tabs>TypeScript</Tabs>
        <Tabs>HTML</Tabs>
        <Tabs>Hosting</Tabs>
      </menu>
      </section>
      
      </div>  
  
  }
  
  export default App;