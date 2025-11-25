import { List } from "./List";


export function AllItems({items,handleClick,handleDeleteButton,handleUpdateButton}) {
  return items.map((item) => {
    return (
      <List key={item.id} item={item} handleClick={handleClick} handleDeleteButton={handleDeleteButton} handleUpdateButton={handleUpdateButton}/>

    );
  });
}
