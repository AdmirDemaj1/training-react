import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Test2 from "./Test2";

// In this scenario we can do three tests:
// 1) If the button is not yet clicked it shows "Hello Foo!"
// 2) If the button is clicked and changes the state the "Goodbye Foo!" is shown
// 3) When the button is clicked and state is false I want to make sure that the "Hello Foo!" not displayed

describe("Test componet2," , () => {
    test('renders Hello Foo', () => {
  render(<Test2/>);
  const output = screen.getByText('Hello Foo!');
  expect(output).toBeInTheDocument();
});

test('renders Goodbye Foo after button click',async () => {
    // Arrange

    render(<Test2/>);

    //Act
    const buttonElement = screen.getByRole('button');
    console.log("buttonElement",buttonElement)
    await userEvent.click(buttonElement);

    // Assert
    //If you want to know more about screen and userEvent methods go to: https://testing-library.com/docs/guiding-principles
    const output = screen.getByText('Goodbye Foo!', {exact: false});
    expect(output).toBeInTheDocument();
  });


  test('Hello Foo is hidden after button click',async () => {
    // Arrange

    render(<Test2/>);

    //Act
    const buttonElement = screen.getByRole('button');
   
    await userEvent.click(buttonElement);

    // Assert
    const output = screen.queryByText('Hello Foo!');
    expect(output).toBeNull();
  });

});
