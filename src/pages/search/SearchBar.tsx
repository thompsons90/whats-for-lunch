import React, { useState, ChangeEvent } from "react";
import { SearchBarProps } from "../../utils/constants";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  // const [filter, setFilter] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };
  console.log(searchTerm);
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;

//      let results = articles.filter((val) => {
//   switch (filter) {
//     case "":
//     case "all":
//       return searchTerm === "" || val.title.toLowerCase().includes(searchTerm.toLowerCase());
//     case "completed":
//       return searchTerm === "" && val.completed.toString().includes(filter);
//     default:
//       if (searchTerm !== "" && filter !== "" && val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
//         console.log("here");
//         return val;
//       }
//       return false;
//   }
// });

// }
// })

//  return (
//       <>
// <select value={filter} onChange={(event) => {setFilter(event.target.value)}} className="dropmenu dropdown-menu">
//     <option value="">All</option>
//                 <option value="true">True</option>
//                 <option value="false">False</option>

//     </select>
//        <input
//         type="text"
//         placeholder="Search..."
//         onChange={(event) => {
//           setSearchTerm(event.target.value);
//         }}
//       />
//        <h1>h1</h1>
//     <ul className='list-group mb-4'>
//       {posts && posts.map(post => (
//         <li key={post.id} className='list-group-item'>
//           {post.title}
//         </li>
//       ))}
//     </ul>

//     </>

//   );
// };

// export default Posts;
