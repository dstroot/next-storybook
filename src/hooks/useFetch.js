import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, [url]);

  return [data, loading];
}

export { useFetch };

// https://www.reddit.com/r/reactjs/comments/anykf2/an_extremely_simple_howto_fetch_data_with_hooks/?st=JRU4VC4T&sh=0b0eb346

// // Photos.js
// import React from "react";
// import { useFetch } from "./hooks";
// function Photos() {
//   const [data, loading] = useFetch(
//     "https://jsonplaceholder.typicode.com/photos?albumId=1"
//   );
//   return (
//     <>
//       <h1>Photos</h1>
//       {loading ? (
//         "Loading..."
//       ) : (
//         <ul>
//           {data.map(({ id, title, url }) => (
//             <li key={`photo-${id}`}>
//               <img alt={title} src={url} />
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// }
// export default Photos;

// another example

// import { useState, useEffect } from "react";

// const useFetch = url => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   // Async get data via API
//   const getData = async () => {
//     try {
//       // get data
//       const res = await fetch(url, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_API_KEY
//         }
//       });

//       // process response
//       if (res.ok) {
//         const json = await res.json();
//         setData(json.records);
//       } else {
//         setError(new Error(res.status + " " + res.statusText));
//       }
//     } catch (err) {
//       setError(
//         new Error(
//           "The events API did not return any data. Check your privacy tools (such as Privacy Badger) and ad blockers (such as uBlock Origin)."
//         )
//       );
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, [url]); // empty array (run once only), or URL to re-run when url changes

//   return [ data, error ];
// };

// export { useFetch };
