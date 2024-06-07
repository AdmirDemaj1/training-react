// Changes between type Aliases dhe interfaces

// Deklarimi

type Cocktail = {
    category: string;
    ingredients: string[];
}

interface ICocktail {
    category: string;
    ingredients: string[];
}

//  extending
type Cocktail2 = {
    category: string;
    ingredients: string[];
}

type CocktailWithPrice = Cocktail2 & {
    price: number;
}


interface ICocktail2 extends Cocktail2  {
    category: string;
    ingredients: string[];
}

// Interface can only describe an object but type aliases can also declare premitive types

// type adresa = string;
interface adresa  {qyteti : string};
const adresaIme: adresa = {qyteti: "Tirane"};

// Interfaces are open to changes

interface macja {
    ngjyra: String
}

interface macja {
    category: string;
}

type Cocktail3 = {
    category: string;
    ingredients: string[];
}

type Cocktail3 = {
 test: string
}
