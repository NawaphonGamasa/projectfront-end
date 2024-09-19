import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import ProductItem from "./ProductItem";
import "./Home.css";

export default function Home() {

  const [productTypes, setProductTypes] = useState([]);
  const [productTypeId, setProductTypeId] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:3000/api/product_types",
        {
          medthod: "GET",
          headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
            Authorization: "Bearer " + localStorage.getItem("access_token")

          }
        }
      );
      console.log("Bearer " + localStorage.getItem("access_token"));
      let json = await response.json();
      setProductTypes(json.data);
      console.log("test19");
      console.log(json.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:3000/api/products/type/" + productTypeId,
        {
          medthod: "GET",
          headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
            Authorization: "Bearer " + localStorage.getItem("access_token")
          }
        }
      );

      // console.log("Bearer " + localStorage.getItem("access_token"));
      // let json = await response.json();
      // setProductTypes(json.data);
      // console.log ("test19");
      // console.log(json.data);
      const json = await response.json();
      setProducts(json.data);

    }
    fetchData();
  }, [productTypeId]);


  if (localStorage.getItem("access_token")) {
    console.log(localStorage.getItem("access_token"));

    return (
      <>
        <div className="web">
          <div className="header" style={{position:"relative"}}>
            <div><img src={`logo.png`} style={{width:"180px",height:"190px",position:"absolute",top:"-50px",left:"-20px"}}></img></div>
            <div style={{marginLeft:"8rem",color:"whitesmoke"}}> 
            <h1>NAWAPHON SHOP</h1>
          </div>
          </div>
          <div className="container fa" style={{ backgroundColor: "lightgray", padding: "20px" }}>
            <select className="form-select" style={{ backgroundColor: "#ff7474", marginBottom: "10px",color:"white" }} value={productTypeId} onChange={(e) => setProductTypeId(e.target.value)}>
              <option value={0}>ทุกประเภทสินค้า</option>
              {
                productTypes.map(item => (
                  <option key={item.type_id} value={item.type_id}>
                    {item.type_name}
                  </option>
                ))
              }
            </select>

            <Link to={"/product/add"} className="btn btn-outline-primary me-3">เพิ่ม</Link>
            <div  style={{ display: "grid", gridTemplateColumns: "repeat(2,400px)", justifyContent: "center"}}>
              {
                products.map(item => (
                  <ProductItem key={item.product_id} data={item} />
                ))
              }
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <Navigate to="/" replace />
  );
}