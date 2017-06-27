// // Include React
// import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';
// import { Save } from 'children/Save.js';
//
// class Search extends Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="col-lg-12">
//           <div className="panel panel-primary">
//             <div className="panel-heading">
//               <h3 className="panel-title">searchResults</h3>
//             </div>
//             <div className="panel-body">
//               <p>I'm child 1!</p>
//               <p>
//                 <Link to="/searchResults/GrandChild1"><button className="btn btn-warning btn-sm">Show Grandchild #1</button></Link>
//                 <Link to="/searchResults/GrandChild2"><button className="btn btn-success btn-sm">Show Grandchild #2</button></Link>
//               </p>
//
//               <Route path="/searchResults/GrandChild1" component={GrandChild1} />
//               <Route path="/searchResults/GrandChild2" component={GrandChild2} />
//
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
//
// export default Search;
