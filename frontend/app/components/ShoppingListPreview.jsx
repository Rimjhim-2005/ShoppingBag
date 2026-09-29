import CircularProgressBar from "./fragments/CircularProgressBar";
const ShoppingListPreview = ({ shoppingList, onClick }) => {
  if (!shoppingList) return null;

  return (
    <div className="shopping-list-preview" onClick={onClick}>
      <h3>{shoppingList.name}</h3>
      <span>Items:{shoppingList.items?.length || 0}</span>
      <span>
        Rs.
        {shoppingList.items
          ?.reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2) || "0.00"}
      </span>
      <div className="flex flex-row items-center justify-center gap-1">
        <CircularProgressBar progress={50} />
        <span
          className="material-symbols-outlined"
          style={{
            fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48",
            fontSize: "5rem",
            lineHeight: 0,
            display: "inline-flex",
            alignItems: "center",
            width: "3rem",
            justifyContent: "center",
          }}
        >
          arrow_drop_down
        </span>
      </div>
    </div>
  );
};

export default ShoppingListPreview;
