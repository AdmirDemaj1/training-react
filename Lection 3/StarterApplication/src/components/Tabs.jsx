function Tabs({children, handleSelect}){
    //Imperative VS Declerative Coding
    // document.getElementById("");
    // document.querySelector("button").addEventListener("click", () => {});
// function handleSelect() {
//     console.log("yesss clickedd");
// }

 return (
    <li>
        <button onClick={handleSelect}>{children}</button>
    </li>
 )
}

export default Tabs;