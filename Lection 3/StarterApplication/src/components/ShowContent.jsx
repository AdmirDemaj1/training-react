import { KNOWLEDGE_DATA } from "../data.js";
function ShowContent({selectedTopic}) {
    return (
      <div id="tab-content">
      <h3>{KNOWLEDGE_DATA[selectedTopic].topic}</h3>
      <p>{KNOWLEDGE_DATA[selectedTopic].knowledge}</p>
    </div>
    )
  }
  export default ShowContent;