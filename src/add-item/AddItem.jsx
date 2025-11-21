import { Helmet } from "react-helmet";
import { Form } from "../components/Form";
import { Header } from "../components/Header";

import "./addItem.css";
export function AddItem({items,fetchItemData}) {
  return (
    <>
        <title>smart cart-Add</title>
      <Header currentPage="add" />
      <Form currentPage="add" items={items} fetchItemData={fetchItemData}/>
    </>
  );
}
