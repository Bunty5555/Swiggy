import ListMenu from "./ListMenu";

const RestMenuCetogary = ({ data, showItem, setShowItem, dummy }) => {
  const handlClick = () => {
    setShowItem();
  };
  console.log(dummy);
  return (
    <div>
      <div className="shadow-2xl py-3 w-6/12  mx-auto bg-gray-100">
        {/* {Header} */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handlClick}
        >
          <span className="font-bold text-lg">
            {data.title}##### ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItem && (
          <ListMenu key={data?.card?.info?.id} items={data.itemCards} />
        )}
      </div>

      {/* Body */}
    </div>
  );
};

export default RestMenuCetogary;
