import { render, screen } from "@testing-library/react";
import Contacts from '../Contacts';
import "@testing-library/jest-dom";


// describe("",()=>{
//   it("",()=>{

//   })
// })

test('contact page should be rendered successfully', () => {

  render(<Contacts/>);

  // const heading = screen.getByRole("heading");
  const heading = screen.getAllByRole("textbox");
  // console.log(heading);
  // const heading = screen.getByText("Submit");
  // const heading = screen.getByPlaceholderText("name");
  // const heading = screen.getByPlaceholderText("message");

  // expect(heading).toBeInTheDocument();

});
