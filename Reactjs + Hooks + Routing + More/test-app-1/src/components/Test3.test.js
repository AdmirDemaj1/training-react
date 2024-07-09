import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Test3 from "./Test3";


describe("Test Async" , () => {
    test('Test the list', async () => {
  render(<Test3/>);

  const list = await screen.findAllByRole('listitem');
  expect(list).not.toHaveLength(0);
});


});
