import { List } from "./List";

export function SearchResult({
  items,
  search,
  handleClick,
  handleUpdateButton,
  handleDeleteButton,
}) {
  const foundItemArray = items.filter(
    (item) => item.name.toLowerCase() === search.toLowerCase()
  );

  if (foundItemArray.length === 0) {
    return <p className="not-found">Not Found</p>;
  }
  return (
    <>
      {foundItemArray.map((foundItem) => {
        return (
          <List
          key={foundItem.id}
            item={foundItem}
            handleClick={handleClick}
            handleDeleteButton={handleDeleteButton}
            handleUpdateButton={handleUpdateButton}
          />
        );
      })}
    </>
  );
}
