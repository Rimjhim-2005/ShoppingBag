import ShoppingList from "./components/ShoppingList";
import mockShoppingLists from "./mockShoppingLists";
const App = () => {
  return (
    <div className="bg-neutral-950 h-screen flex items-center justify-center">
      <ShoppingList list={mockShoppingLists[0]} />
    </div>
  );
};

export default App;
