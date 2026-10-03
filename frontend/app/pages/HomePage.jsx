import { useState } from "react";
import ShoppingList from "../components/ShoppingList";
import ShoppingListPreview from "../components/ShoppingListPreview";
import mockShoppingLists from "../mockShoppingLists";
import Modal from "@mui/material/Modal";

const HomePage = () => {
  const [selectedList, setSelectedList] = useState(null);

  const handleListPreview = (list) => setSelectedList(list);

  return (
    <>
      <div className="flex flex-col gap-4 w-fit">
        {mockShoppingLists.map((list) => (
          <ShoppingListPreview
            key={list._id}
            shoppingList={list}
            onClick={() => handleListPreview(list)}
          />
        ))}
      </div>
      <Modal
        open={Boolean(selectedList)}
        onClose={() => setSelectedList(null)}
        aria-label="Shopping list"
      >
        <div className="absolute left-1/2 top-1/2 max-h-[calc(100vh-2rem)] w-[min(44rem,calc(100%_-_2rem))] -translate-x-1/2 -translate-y-1/2 overflow-y-auto p-4 outline-none">
          {selectedList && <ShoppingList list={selectedList} />}
        </div>
      </Modal>
    </>
  );
};

export default HomePage;
