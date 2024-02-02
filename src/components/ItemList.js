import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../constants";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItems(item));
  };

  return (
    <div className="menu-container">
      {items.map((item) => (
       <div className="menu-item" key={item?.id}>
       <div className="menu-item-details">
         <h3 className="item-title">{item?.name}</h3>
         <p className="item-cost">
           {item?.price > 0
             ? new Intl.NumberFormat("en-IN", {
                 style: "currency",
                 currency: "INR",
               }).format(item?.price / 100)
             : " "}
         </p>
         <p className="item-desc">{item?.description}</p>
       </div>
       <div className="menu-img-wrapper">
         {item?.imageId && (
           <img
             className="menu-item-img"
             src={IMG_CDN_URL + item?.imageId}
             alt={item?.name}
           />
         )}
         <button className="add-btn" onClick={()=>handleAddItem(item)}> ADD +</button>
       </div>
     </div>
      ))}
    </div>
  );
};

export default ItemList;