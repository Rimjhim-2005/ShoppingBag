import ShoppingListPreview from "../components/ShoppingListPreview";
import mockShoppingLists from "../mockShoppingLists";

const HomePage = () => {
  const handleListPreview = (list) => {
    console.log("Clicked on list:", list);
  };

  return (
    <div className="flex flex-col gap-4 w-fit">
      {mockShoppingLists.map((list) => (
        <ShoppingListPreview
          key={list._id}
          shoppingList={list}
          onClick={() => handleListPreview(list)}
        />
      ))}
    </div>
  );
};

export default HomePage;
