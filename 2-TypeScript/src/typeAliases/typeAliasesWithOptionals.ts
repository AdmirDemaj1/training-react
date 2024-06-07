type Address = {
    street: string;
    city: string;
    state?: string |number;
    postalCode: string;
}

type User = {
    name: string;
    email: string;
    age?: string ;
    address?: Address;
}


// Usage

const Marinel: User = {
    name: "Marinel",
    email: "marinel...",
    address: {street: "test",
        city: "test",
        state: "test",
        postalCode: "test"
}
}

