import { useDispatch } from "react-redux";
import { image_url } from "../utiles/logo";
import { addItem } from "../utiles/cartSlice";

const ListMenu = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between"
        >
          <div className="py-2 w-9/12">
            <span className="font-bold">
              {item?.card?.info?.name}???????????
            </span>{" "}
            <span className="font-bold">
              {" "}
              - ₹{" "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </span>
            <p className="text-xs py-3">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12">
            <div className="p-2 cursor-pointer absolute bg-blue-100 rounded-lg mx-16">
              <button onClick={() => handleAddItem(item)}>Add+</button>
            </div>
            <img src={image_url + item?.card?.info?.imageId} alt="Img" />
          </div>
          <div>
            <button className="py-3 cursor-pointer absolute bg-blue-100 rounded-lg my-5 mx-2 text-xl">
              -Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListMenu;

// <span>{item?.card?.info?.name}</span>
// <p>{item?.card?.info?.description}</p>
// <p>Cetagory</p>
