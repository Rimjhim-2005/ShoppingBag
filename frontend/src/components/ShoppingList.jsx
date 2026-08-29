import ActiveStatus from "./fragments/ActiveStatus";

const ShoppingList = (listData) => {
  const { list } = listData;
  return (
    <div>
      <div className="flex flex-col mx-auto aspect-700/535 w-full max-w-175 rounded-lg bg-neutral-100 shadow-pop">
        <div className="flex justify-between gap-6">
          <div className="border-1 rounded-lg p-1 text-sm p-2">
            <span>Edit</span>
          </div>
          <div className="text-base font-bold text-neutral-950 m-auto">
            {list.name}
          </div>
          <ActiveStatus status={list.status} />
        </div>
        <hr className="my-4"></hr>
        <table className="table-auto text-sm">
          <thead>
            <tr>
              <th>ITEMS</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            {list.items.map((item) => (
              <tr key={item._id}>
                <td className="flex flex-row gap-2 items-center">
                  <div className="rounded-full bg-neutral-950 w-2 h-2" />
                  {item.itemName}
                </td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShoppingList;
