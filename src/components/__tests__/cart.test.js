import {fireEvent, firevent, render, screen} from "@testing-library/react";
import {act} from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../../mocks/mocResMenu.json";
import {Provider} from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch == jest.fn(()=>{
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
});


test('should Load restaurantMenu Component', async () => {
  await act(async ()=>{
    return render (
      <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  });

  const accordianHeader = screen.getByText("Biryani (5)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("FoodItems").length).toBe(5);

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", {name: "Add +"});
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(7);

  fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

  expect(screen.getAllByTestId('foodItems').length).toBe(5);

  expect(screen.getByText("Cart is empty. Add Items to the cart!")).toBeInTheDocument();
});
