import ShoppingList from "./components/ShoppingList";
import mockShoppingLists from "./mockShoppingLists";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="bg-neutral-950 h-screen flex items-center justify-center">
        <ShoppingList list={mockShoppingLists[3]} />
      </div>
    </>
  );
};

export default App;
