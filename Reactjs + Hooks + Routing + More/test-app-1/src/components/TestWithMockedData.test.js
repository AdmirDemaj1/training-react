import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestWithMockedData from './TestWithMockedData';

const mockData = [
    {
        id: 1,
        first_name: "Fletcher",
        last_name: "McVanamy",
        email: "mmcvanamy0@e-recht24.de",
        age: 30
      }, {
        id: 2,
        first_name: "Clarice",
        last_name: "Harrild",
        email: "charrild1@dion.ne.jp",
        age: 35
      }, 
]

test('List renders successfully',async () => {
    const mockHandleClick = jest.fn();
    //arrange
  render(<TestWithMockedData data={mockData} displayList={true} handleClick={mockHandleClick}/>);

  //act
  await userEvent.click(screen.getByText(/mmcvanamy0@e-recht24.de/i));

    //   const linkElement = screen.getByText('Learn React', {exact: true});
    //   expect(linkElement).toBeInTheDocument();
    expect(screen.getByText(/Clarice/i)).toBeInTheDocument();
    expect(mockHandleClick).toHaveBeenCalled();
});
