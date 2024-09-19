// import { Link } from "react-router-dom";
// import "./ProductItem.css"

// export default function ProductItem(props) {
//     return (
//         <div className="row border rounded shadow-sm mt-5 ">
//             <div className="col-3">
//                 <img src={`http://localhost:8080/images/${props.data.image_url}`} width={100} />
//             </div>
//             <div className="col-7">
//                 <h5 className="text-primary">{props.data.product_name}</h5>
//                 <Link to={`/product/${props.data.product_id}`} className="btn btn-outline-primary me-3 fs-5">แก้ไข</Link>
//                 <button type="button" className="btn btn-outline-danger fs-5">ลบ</button>
//             </div>
//             <div className="col-2">
//                 <span className="text-warning fs-4">{props.data.price}</span>
//             </div>
//         </div>
//     );
// }
// import { Link } from "react-router-dom";
// import "./ProductItem.css";

// export default function ProductItem(props) {
//     return (
//         <div className="row mt-3 justify-content-center">
//             <div className="col-6">
//                 <div className="mb-3" style={{backgroundColor:"white", borderRadius:"20px", padding:"1rem"}}>
//                     <div>
//                         <img src={`http://localhost:8080/images/${props.data.image_url}`} className="img-fluid" style={{borderRadius: "10px",}}/>
//                     </div>
//                     <div className="col-md-8">
//                         <div className="">
//                             <h5 className="row-2 text-success"style={{marginTop:"10px"}}>{props.data.product_name}</h5>
//                             <div className="contain">
//                             <span className="text-warning fs-4">{props.data.price}</span>
//                             </div>
//                             <div className="card-text" style={{}}>
//                                 <Link to={`/product/${props.data.product_id}`} className="btn btn-outline-primary me-3 fs-5">แก้ไข</Link>
//                                 <button type="button" className="btn btn-outline-danger fs-5">ลบ</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
import { Link } from "react-router-dom";
import "./ProductItem.css";

export default function ProductItem(props) {
    return (
        <div className="justify-center" style={{ backgroundColor: "white", borderRadius: "20px", padding: "", margin: "2rem", boxShadow: "12px 10px 26px 3px rgba(0,0,0,0.37)", WebkitBoxShadow: "12px 10px 26px 3px rgba(0,0,0,0.37)", MozBoxShadow: "12px 10px 26px 3px rgba(0,0,0,0.37)" }}>
            <div>
                <img src={`http://localhost:3000/images/${props.data.image_url}`} className="img-fluid" style={{ borderRadius: "10px", }} />
            </div>
            <div className="contain-center">
                <div className="">
                    <h5 className="text-success" style={{ marginTop: "10px",marginLeft: "20px" }}>{props.data.product_name}</h5>
                    <div className="contain">
                        <span className="text-warning fs-4" style={{ marginLeft: "20px" }}>{props.data.price}</span>
                    </div>
                    <div style={{padding:"20px", marginLeft:"100px"}}>
                        <Link to={`/product/${props.data.product_id}`} className="btn btn-outline-primary me-3 fs-5">แก้ไข</Link>
                        <button type="button" className="btn btn-outline-danger fs-5">ลบ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
