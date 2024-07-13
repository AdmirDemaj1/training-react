import { render, screen } from "@testing-library/react";
import Test1 from "./Test1";

//All the tests belonging to one feature or which are related to one-another can 
// be grouped in one testing suite "describe"
describe("Test Component Related Tests" , () => {
    test('renders Hello Foo', () => {
        // Arrange
        render(<Test1/>);
    
        // Act
    
        // Assert
        const output = screen.getByText('Hello Foo!');
        expect(output).toBeInTheDocument();
    });
    test('renders Goodbye Foo!', () => {
        // Arrange
        render(<Test1/>);
    
        // Act
    
        // Assert
        const output = screen.getByText('Goodbye Foo!');
        expect(output).toBeInTheDocument();
    });
})
