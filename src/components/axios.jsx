import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Axios = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data.slice(0, 2)); // Fetch first 10 posts for simplicity
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1> Axios Component</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <strong>Title : {post.title}</strong>
            <p>body : {post.body}</p><br></br>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Axios;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Heart, MessageCircle, Share2, ChevronDown, ChevronUp } from 'lucide-react';

// function Axios() {
//   const [posts, setPosts] = useState([]);
//   const [error, setError] = useState(null);
//   const [expandedPost, setExpandedPost] = useState(null);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => {
//         const enhancedPosts = response.data.slice(0, 100).map(post => ({
//           ...post,
//           username: `user_${post.id}`,
//           likes: Math.floor(Math.random() * 1000),
//           comments: Math.floor(Math.random() * 50),
//           imageUrl: `https://picsum.photos/seed/${post.id}/400/400`
//         }));
//         setPosts(enhancedPosts);
//       })
//       .catch(error => {
//         setError(error.message);
//       });
//   }, []);

//   const togglePostExpansion = (postId) => {
//     setExpandedPost(expandedPost === postId ? null : postId);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 debug-outline">
//       <div className="w-full max-w-md space-y-6 debug-outline">
//         <h1 className="text-2xl font-bold text-center text-gray-800">InstaPosts</h1>
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         {posts.map(post => (
//           <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden debug-outline">
//             <div className="p-4 flex items-center">
//               <img 
//                 src={`https://i.pravatar.cc/40?u=${post.username}`} 
//                 alt={post.username} 
//                 className="w-10 h-10 rounded-full mr-3"
//               />
//               <span className="font-semibold text-sm">{post.username}</span>
//             </div>
//             <img src={post.imageUrl} alt="Post" className="w-full h-64 object-cover" />
//             <div className="p-4">
//               <div className="flex space-x-4 mb-2">
//                 <button className="text-gray-700 hover:text-red-500 transition">
//                   <Heart size={24} />
//                 </button>
//                 <button className="text-gray-700 hover:text-blue-500 transition">
//                   <MessageCircle size={24} />
//                 </button>
//                 <button className="text-gray-700 hover:text-green-500 transition">
//                   <Share2 size={24} />
//                 </button>
//               </div>
//               <p className="font-semibold text-sm mb-2">{post.likes} likes</p>
//               <button 
//                 onClick={() => togglePostExpansion(post.id)}
//                 className="w-full text-left focus:outline-none"
//               >
//                 <p className="text-sm mb-2 font-semibold flex items-center justify-between">
//                   <span>{post.title}</span>
//                   {expandedPost === post.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
//                 </p>
//               </button>
//               {expandedPost === post.id && (
//                 <p className="text-gray-600 text-sm mt-2">{post.body}</p>
//               )}
//               <p className="text-gray-400 text-xs mt-2">View all {post.comments} comments</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Axios;