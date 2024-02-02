import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../constants";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="item-container"
        >
          <div className="item-info">
            <div className="item-name-price">
              <span>{item.card.info.name}</span>
              <span>- ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
            </div>
            <p className="item-price">{item.card.info.description}</p>
          </div>
          <div className="item-image-container">
            <button className="add-button" onClick={() => handleAddItem(item)}>
              Add +
            </button>
            <img src={IMG_CDN_URL + item.card.info.imageId} className="item-image" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;