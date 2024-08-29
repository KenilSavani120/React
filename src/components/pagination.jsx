// import React from 'react';

// const PaginationItem = ({ page, currentPage, paginate }) => {
//   if (page === "...") {
//     return <span className="px-3 py-2">...</span>;
//   }
//   return (
//     <button
//       onClick={() => paginate(page)}
//       className={`px-3 py-2 rounded-md text-sm font-medium ${
//         currentPage === page
//           ? 'bg-indigo-600 text-white'
//           : 'bg-white text-gray-700 hover:bg-gray-50'
//       }`}
//     >
//       {page}
//     </button>
//   );
// };

// const Pagination = ({ currentPage, totalPages, paginate }) => {
//   const pageNumbers = [];
//   if (totalPages <= 7) {
//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(i);
//     }
//   } else {
//     if (currentPage <= 3) {
//       pageNumbers.push(1, 2, 3, 4, "...", totalPages);
//     } else if (currentPage >= totalPages - 2) {
//       pageNumbers.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
//     } else {
//       pageNumbers.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
//     }
//   }

//   return (
//     <nav className="flex justify-center space-x-1">
//       {pageNumbers.map((number, index) => (
//         <PaginationItem key={index} page={number} currentPage={currentPage} paginate={paginate} />
//       ))}
//     </nav>
//   );
// };

// export default Pagination;
