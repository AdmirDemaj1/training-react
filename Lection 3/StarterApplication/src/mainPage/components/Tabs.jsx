function Tabs({children, handleSelect , isSelected}){
    //Imperative VS Declerative Coding
    // document.getElementById("");
    // document.querySelector("button").addEventListener("click", () => {});
// function handleSelect() {
//     console.log("yesss clickedd");
// }

 return (
    <li>
        <button className={isSelected ? 'active' : undefined} onClick={handleSelect}>{children}</button>
    </li>
 )
}

export default Tabs;