import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const Post = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0); 
  const [postsPerPage] = useState(1);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(0); 
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredData.length / postsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="select-none reletive min-h-screen bg-pink-blue-gradient flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="select-none mt-6 text-center text-3xl font-extrabold text-gray-900">
            BinOstagram
          </h2>
        </div>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {currentPosts.map((item) => (
          <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5">
              <h3 className="select-none text-lg leading-6 font-medium text-gray-900">
                {item.title}
              </h3>
            </div>
            <div className="border-t border-gray-200">
              <div className="px-4 py-5">
                <p className="select-none mt-1 text-sm text-gray-500">
                  {item.body}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-center mb-4">
        <ReactPaginate
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'flex justify-center mt-4 space-x-2'}
          pageClassName={'page-item'}
          pageLinkClassName={'px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none'}
          previousClassName={'page-item'}
          previousLinkClassName={'px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none'}
          nextClassName={'page-item'}
          nextLinkClassName={'px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none'}
          breakLinkClassName={'px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none'}
          activeClassName={'bg-indigo-600 text-white'}
          forcePage={currentPage}
        />
        </div>
      </div>
    </div>
  );
};

export default Post;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Pagination from './pagination'; // Import the Pagination component

// const Post = () => {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(1);

//   useEffect(() => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => setData(response.data))
//       .catch((error) => console.log(error));
//   }, []);


  
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   const filteredData = data.filter((item) =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const totalPages = Math.ceil(filteredData.length / postsPerPage);

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Post Viewer
//           </h2>
//         </div>
//         <input
//           type="text"
//           placeholder="Search by title..."
//           value={searchTerm}
//           onChange={handleSearch}
//           className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//         />
//         {currentPosts.map((item) => (
//           <div key={item.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
//             <div className="px-4 py-5 sm:px-6">
//               <h3 className="text-lg leading-6 font-medium text-gray-900">
//                 {item.title}
//               </h3>
//             </div>
//             <div className="border-t border-gray-200">
//               <div className="px-4 py-5 sm:p-6">
//                 <p className="mt-1 max-w-2xl text-sm text-gray-500">
//                   {item.body}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
        
//         <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
//       </div>
//     </div>
//   );
// };

// export default Post;
