import { Helmet } from "react-helmet";
import { Form } from "../components/Form";
import { Header } from "../components/Header";

import "./addItem.css";
export function AddItem({items}) {
  return (
    <>
      <Helmet>
        <title>smart cart-Add</title>
      </Helmet>
      <Header currentPage="add" />
      <Form currentPage="add" items={items}/>
    </>
  );
}
