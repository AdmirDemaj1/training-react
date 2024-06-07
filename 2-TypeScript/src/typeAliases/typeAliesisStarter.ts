type StringOrNumber = string | number;

type UserType = {name: string, id: StringOrNumber }

type arrayMosha = (number|string|boolean)[];
type femija = {
    name: string,
    mosha: number,
    hobies: arrayMosha
}

const logoDetajet = (id: StringOrNumber , item: string) => {
    console.log(`${item} ka id ${id} `)
};

const helloFunction = (user: UserType) => {
    console.log(`${user.name} ju thote hello `)
};

const goodbyeFunction = (user: UserType) => {
    console.log(`${user.name} ju thote goodbye `)
};


// Krijoni nje type alieses per qenin dhe macen

type Animals = {name: string, legs: string, age: string, toy: string};

type Dog = Animals;
type Cat = Animals;




