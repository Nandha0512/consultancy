// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { getAdminPollachis,deletePollachis } from '../../../../actions/ProductActions/Paction'


// const ProductsTable = () => {


//     const { Pollachis = [], isPollachiDeleted } = useSelector(state => state.PollachiState)
//     const dispatch = useDispatch()
//     // console.log(Workers)
//     const deleteHandler = (e, id) => {
//         e.target.disabled = true;
//         dispatch(deletePollachis(id))
//     }
//     useEffect(() => {
//         dispatch(getAdminPollachis);

//     }, [dispatch, isPollachiDeleted])

//     return (
//         <div>
//             <center>
//                 <div className="form">
//                     {
//                         Pollachis.length > 0 ?
//                             (
//                                 <>
//                                     <table class="table table-striped">
//                                         <tr>
//                                             <th>Name</th>
//                                             <th>Price</th>
//                                             <th>Stocks</th>
//                                             <th>District Name</th>
//                                             <th>Description</th>
//                                             <th>Update</th>
//                                             <th>Delete</th>
//                                         </tr>

//                                         {
//                                             Pollachis.map((item) => {
//                                                 return (
//                                                     <>
//                                                         <tr>
//                                                             <td>
//                                                                 {
//                                                                     item.name
//                                                                 }
//                                                             </td>
//                                                             <td>
//                                                                 {
//                                                                     item.price
//                                                                 }
//                                                             </td>
//                                                             <td>
//                                                                 {
//                                                                     item.stocks
//                                                                 }
//                                                             </td>

//                                                             <td>
//                                                                 {
//                                                                     item.ProductDistrict
//                                                                 }
//                                                             </td>

//                                                             <td>
//                                                                 {
//                                                                     item.description
//                                                                 }
//                                                             </td>
//                                                             <td>
//                                                                 <Link to={`/admin/di/po/update/${item._id}`}><button style={{ backgroundColor: 'orange', border: 'none', width: '105px', height: '35px', borderRadius: '5px', color: 'white' }}>Edit</button></Link>
//                                                             </td>
//                                                             <td>
//                                                                 <button onClick={e => deleteHandler(e, item._id)} style={{ backgroundColor: 'red', border: 'none', width: '85px', height: '35px', borderRadius: '5px', color: 'white' }}>Delete</button>
//                                                             </td>
//                                                         </tr>
//                                                     </>
//                                                 )
//                                             })
//                                         }
//                                     </table>
//                                 </>
//                             ) :
//                             (<></>)
//                     }
//                 </div>
//             </center>
//         </div>
//     )
// }

// export default ProductsTable


import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAdminPollachis, deletePollachis } from '../../../../actions/ProductActions/Paction';

const ProductsTable = () => {
  const { Pollachis = [], isPollachiDeleted } = useSelector((state) => state.PollachiState);
  const dispatch = useDispatch();

  const deleteHandler = (e, id) => {
    e.target.disabled = true;
    dispatch(deletePollachis(id));
  };

  useEffect(() => {
    dispatch(getAdminPollachis);
  }, [dispatch, isPollachiDeleted]);

  return (
    <div>
      <center>
        <div className="form">
          {Pollachis.length > 0 ? (
            <>
              <div className="card-container">
                {Pollachis.map((item) => (
                  <div className="card" key={item._id}>
                    
                  <img src={item.image.url} alt={item.name} style={{width:'500px', height:'200px'}}  />
                
                <div className="card-details">
                 
                  <h2 className="card-value" style={{ color: 'black' }}>{item.name}</h2>

                  <h3 className="card-label" style={{ color: 'black' }}>Description:</h3>
                  <div className="card-value" style={{ color: 'black' }}>{item.description}</div>

                  <h3 className="card-label" style={{ color: 'black' }}>Price:</h3>
                  <div className="card-value" style={{ color: 'black' }}>{item.price}</div>

                  <h3 className="card-label" style={{ color: 'black' }}>Stocks:</h3>
                  <div className="card-value" style={{ color: 'black' }}>{item.stocks}</div>

                  
                </div>
                    <div className="card-actions">
                      <Link to={`/admin/di/co/update/${item._id}`}>
                        <button className="card-button" style={{ backgroundColor: 'orange',marginRight: '10px',padding:'10px'  }}>
                          Edit
                        </button>
                      </Link>
                      <button
                        className="card-button"
                        onClick={(e) => deleteHandler(e, item._id)}
                        style={{ backgroundColor: 'red',padding:'10px' }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </center>
    </div>
  );
};

export default ProductsTable;
