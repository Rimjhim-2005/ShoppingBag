//TODO: Add functionality to mark items as done and update the list status accordingly.
//TODO: Implement tanstack virtual for the list
import { memo } from "react";
import ActiveStatus from "./fragments/ActiveStatus";

const ShoppingList = (listData) => {
  if (!listData || !listData.list) {
    console.error(
      "ShoppingList component received invalid listData:",
      listData,
    );
    return null;
  }
  const { list } = listData;
  console.log("ShoppingList was rendered at", new Date().toLocaleTimeString());

  const handleMarkedDone = () => {
    console.log("Marked as done");
  };

  return (
    <div>
      <div className="flex flex-col justify-between mx-auto aspect-700/535 w-full max-w-175 rounded-xl bg-neutral-100 shadow-pop">
        <div className="flex justify-between gap-6 p-3 items-center border-b border-neutral-950">
          <div className="border rounded-full text-sm py-2 px-3">
            <span>Edit</span>
          </div>
          <div className="text-base font-bold text-neutral-950 m-auto">
            {list.name}
          </div>
          <ActiveStatus status={list.status} />
        </div>

        <div className="max-h-72 overflow-y-auto overflow-x-auto p-4">
          <table className="w-full table-auto text-sm border-collapse border-spacing-0">
            <thead className="sticky top-0 bg-neutral-100 z-10">
              <tr>
                <th className="border-0 px-4 py-1 text-left">ITEMS</th>
                <th className="border-0 px-2 py-1 text-center">QUANTITY</th>
                <th className="border-0 px-2 py-1 text-center">PRICE</th>
                <th className="border-0 px-2 py-1 text-center">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {list.items.map((item) => (
                <tr key={item._id}>
                  <td className="flex flex-row gap-2 items-center px-2 py-1">
                    <div className="rounded-full bg-neutral-950 w-2 h-2 wrap-break-word" />
                    {item.itemName}
                  </td>
                  <td className="justify-center border-0 px-2 py-1">
                    {item.quantity}
                  </td>
                  <td className="border-0 px-2 py-1">{item.price}</td>
                  <td className="border-0 px-2 py-1">
                    <input
                      type="checkbox"
                      className="shopping-checkbox"
                    ></input>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between p-3 mt-auto">
          <span>Expenditure :</span>
          <span>
            Rs.
            {list.items
              .reduce((total, item) => total + item.price, 0)
              .toFixed(2)}
          </span>
        </div>
        <div
          className="btn-primary text-sm rounded-lg mx-auto mt-2 mb-6 cursor-pointer select-none"
          onClick={handleMarkedDone}
        >
          Mark as done
        </div>
      </div>
    </div>
  );
};

export default memo(ShoppingList);
