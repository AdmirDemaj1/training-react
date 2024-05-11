import { useState } from "react";


import Header from "./components/Header/Header.jsx";
import Tabs from "./components/Tabs.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons'; 
import { KNOWLEDGE_DATA } from "./data.js";
import ShowContent  from "./components/ShowContent.jsx";
//Single responsibility principle
  function App() {
   const [selectedTopic, setSelectedTopic] = useState(null);
  //  const [shopping, setShopping] = useState("skam"); 
  //  const [ graviteti, setGraviteti]= useState("kam rene")
// Rerendering
    let dynamicTab = "Not Selected"
    function handleTabClick(selectedTab) {
      setSelectedTopic(selectedTab);
      // dynamicTab = selectedTab;
      console.log("selected tab iss", selectedTab)
    }

    // function showContent() {
    //   return (
    //     <div id="tab-content">
    //     <h3>{KNOWLEDGE_DATA[selectedTopic].topic}</h3>
    //     <p>{KNOWLEDGE_DATA[selectedTopic].knowledge}</p>
    //   </div>
    //   )
    // }
    // function handleGraviteti(state){
    //   setGraviteti(state)
    // }

    // function handleCokollata(vleren) {
    //   setShopping(vleren);
    //   console.log(`Vlera`, vleren);
    // }
    // if( 1+ 1 === 2){
    //   console.log("yes")
    // } else {
    //   console.log("no")
    // }
    // let check = 1 +1 ;


    return  (<div> <Header/> 
    
    {/* <Tabs>{<div>
      <button>Testtt</button></div>}</Tabs>  */}

      <section id="examples">
      <h2>My Knowledges</h2>
      <menu>
        <Tabs  handleSelect={()=> handleTabClick("reactjs")} >React js</Tabs>
        <Tabs handleSelect={()=> handleTabClick("typescript")}>TypeScript</Tabs>
        <Tabs handleSelect={()=> handleTabClick("html")}>HTML</Tabs>
        <Tabs handleSelect={()=> handleTabClick("hosting")}>Hosting</Tabs>

        {/* <button onClick={() => handleCokollata("kam blere")}>kam blere</button>
        <button onClick={() => handleCokollata("skam blere")}>skam blere</button>
        <button onClick={() => handleGraviteti("kam rene")}>kam rene</button>
        <button onClick={() => handleGraviteti("skam rene")}>skam rene</button> */}
        {/* <FontAwesomeIcon icon={faEllipsisV}/> */}
      </menu>
      I have selected {}
      Une {} cokollata
      Une {} nga shkallet
      {/* Turnary expressions */}
      {/* {check === 3 ? "Yess" : "No" } */}
      {/* Not a clean code, to much turnery operations */}
      {/* {selectedTopic === "Not Selected" ? <div>Nothing to display</div> : selectedTopic === "reactjs" ?  <div id="tab-content">
        <h3>ReactJS</h3>
        <p>Njohurite e mia ne Reactjs jane , VDOM, states, components, vite, typescript</p>
      </div> : selectedTopic === "typescript" ? 
      // Get rid of this, make it reusable
      <div id="tab-content">
        <h3>Typescript</h3>
        <p>Njohurite e mia ne ypescript jane interface, type annotations, type aliases, classes, generics, unin types, default, params, any</p>
      </div> : selectedTopic === "html" ?
      <div id="tab-content">
        <h3>html</h3>
        <p>Njohurite e mia ne html jane ...</p>
      </div> : 
      <div id="tab-content">
        <h3>hosting</h3>
        <p>Njohurite e mia ne hosting jane ...</p>
      </div>
  } */}

{/* Great job, but you need to make it reusable */}
{!selectedTopic ? "Not selected yet" : <ShowContent selectedTopic={selectedTopic} />}


      </section>
      
      </div>  
    )
  }
  
  export default App;