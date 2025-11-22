import { useParams } from "react-router-dom";
import { Form } from "../components/Form";
import { Header } from "../components/Header";


export function Update({items, fetchItemData}) {
const {id}=useParams();


  return (
    <>
    <title>smart cart-update</title>
      <Header currentPage="update" />
      <Form currentPage="update" items={items} id={id} fetchItemData={fetchItemData} />
    </>
  );
}
