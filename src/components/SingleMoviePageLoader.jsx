import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="w-full h-[550px] bg-gray-300 animate-pulse mb-4"></div>
      <div className="flex space-x-8 mb-8">
        <div className="w-[500px] h-[750px] bg-gray-300 animate-pulse"></div>
        <div className="flex-1 space-y-4">
          <div className="w-3/4 h-8 bg-gray-300 animate-pulse"></div>
          <div className="w-1/2 h-6 bg-gray-300 animate-pulse"></div>
          <div className="w-1/3 h-6 bg-gray-300 animate-pulse"></div>
          <div className="w-1/4 h-6 bg-gray-300 animate-pulse"></div>
          <div className="w-1/2 h-24 bg-gray-300 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;

// import React from "react";

// const SkeletonLoader = () => {
//   return (
//     <div className="w-full max-w-4xl mx-auto p-4">
//       {/* Main Poster Image */}
//       <div className="w-full h-[550px] bg-gray-300 animate-pulse mb-4"></div>
      
//       {/* Container for Poster and Details */}
//       <div className="flex space-x-8">
//         {/* Small Poster Image */}
//         <div className="w-[500px] h-[750px] bg-gray-300 animate-pulse rounded-[10px]"></div>
        
//         {/* Details Section */}
//         <div className="flex-1 space-y-4">
//           {/* Title */}
//           <div className="w-3/4 h-8 bg-gray-300 animate-pulse rounded-md"></div>
          
//           {/* Genre */}
//           <div className="w-1/2 h-6 bg-gray-300 animate-pulse rounded-md"></div>
          
//           {/* Rating */}
//           <div className="w-1/3 h-6 bg-gray-300 animate-pulse rounded-md"></div>
          
//           {/* Runtime */}
//           <div className="w-1/4 h-6 bg-gray-300 animate-pulse rounded-md"></div>
          
//           {/* Summary */}
//           <div className="w-3/4 h-24 bg-gray-300 animate-pulse rounded-md"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkeletonLoader;

