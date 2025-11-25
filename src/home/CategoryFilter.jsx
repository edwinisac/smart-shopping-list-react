import { List } from "./List";

export function CategoryFilter({
  categoryFilterdArray,
  handleClick,
  handleUpdateButton,
  handleDeleteButton,
}) {
  return categoryFilterdArray.map((filterItem) => {
    return (
        <List key={filterItem.id} item={filterItem} handleClick={handleClick} handleDeleteButton={handleDeleteButton} handleUpdateButton={handleUpdateButton}/>
    );
  });
}
