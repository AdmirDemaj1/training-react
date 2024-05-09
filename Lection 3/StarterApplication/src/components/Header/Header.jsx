import dad from "../../assets/dad.webp";
import { FAMILY_MEMBERS } from "../../data";
import FamilyMembersComponent from "../FamilyMembersComponent";

// import "./header.css";

function Header() { 
    const types = ["forntend developer","cat", "child" ];

    function getRandomName(num){
      return Math.floor(Math.random() * (num + 1))
    }
    const name = "Foo";
  
      return (
        <div>
        <header>
          <img src={dad} style={{width: 100}}/>
          <h1>Introducing Myself</h1>
  
          {/*static value*/}
          <p>I am a happy {name}!!</p>
        </header>
        <main>
          <section id="core-concepts">
            <h2>My Family Members</h2>
            <ul>
              <FamilyMembersComponent image={FAMILY_MEMBERS[0].image} name={FAMILY_MEMBERS[0].name} hobbies={FAMILY_MEMBERS[0].hobbies}/>
               
               {/* 2-nd Approach - destructuring */}
               <FamilyMembersComponent {...FAMILY_MEMBERS[1]}/>
               <FamilyMembersComponent {...FAMILY_MEMBERS[2]}/>
               <FamilyMembersComponent {...FAMILY_MEMBERS[3]}/>
              {/* <FamilyMembers image={brother} name="Foo Bar" hobbies="To travel"/>
              <FamilyMembers image={grandpa} name="Foo Bar" hobbies="To travel"/>  */}
            </ul>
          </section>
        </main>
        </div>
      );
    }

export default Header;