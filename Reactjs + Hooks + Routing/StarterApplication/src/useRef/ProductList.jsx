import React, {useState, useRef} from 'react';
import './ProductList.css';


const itemss= Array.from({length: 20000}, (_, index) => ({
id: index,
name: `my product with id ${index}`
})) 
const ProductTableWithAutocomplete = () => {
    const [filter, setFilter] = useState('');
    const valueOfFilter = useRef(null);


    console.log("rerenderingggggg");
    // const products = [
    //     { id: 1, name: 'Apple', category: 'Fruit', price: 1.2 },
    //     { id: 2, name: 'Banana', category: 'Fruit', price: 0.5 },
    //     { id: 3, name: 'Carrot', category: 'Vegetable', price: 0.7 },
    //     { id: 4, name: 'Broccoli', category: 'Vegetable', price: 1.0 },
    //     { id: 5, name: 'Steak', category: 'Meat', price: 12.0 },
    //     { id: 6, name: 'Chicken Breast', category: 'Meat', price: 7.0 },
    //   ];


      const handleSearchClick = () => {
        setFilter(valueOfFilter.current);
      };
    
      const filteredProducts = itemss.filter((product) =>
        product.name.toLowerCase().includes(filter.toLowerCase()),
      );

      return (
        <div className="container">
          <h2>Product Table with Autocomplete</h2>
          <div className="autocomplete">
            <input
              type="text"
              ref={valueOfFilter}
            // value={filter}
              placeholder="Search products..."
              onChange={(e) => (valueOfFilter.current = e.target.value)}
            />
            <button onClick={handleSearchClick}>Search</button>
          </div>
          <table className="product-table">
            <thead>
              <tr>
                <th>Name</th>
                {/* <th>Category</th>
                <th>Price ($)</th> */}
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  {/* <td>{product.category}</td>
                  <td>{product.price.toFixed(2)}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );



}

export default ProductTableWithAutocomplete;