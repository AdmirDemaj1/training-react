- What is Redux:
    1. GST(Global State Manager)

- How Redux Works?
    1. Cental Data (State) Store
    2. Actions (Dispatch/trigger)
        dispatch({type: "authenticate user", value: {name:"foo", surname:"bar", token: "jb13btu13tb1f3"}})
    3. Will handle the logic based on the type of the action:
        const reducer = (action) => {
            let token = "";
            if(action.type === "authenticate user"){
                token = action.value.token
            }
        }
    4. Subscriber (An UI Component/Page can subscribe to multiple stores in order to get the last updated data.)


    ![Redux schema](image.png)