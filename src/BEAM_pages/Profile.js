// import React, { useState, useEffect } from "react";

// export default function Profile() {
//   const [image, setImage] = useState(null);

  
//   useEffect(() => {
//     const savedImage = localStorage.getItem("user_profile_image");
//     if (savedImage) {
//       setImage(savedImage);
//     }
//   }, []);
//   const removeUserProfileImage = () => {
//   localStorage.removeItem("user_profile_image");
//   setImage(null); 
// };

//   // Handle image selection
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result); 
//         localStorage.setItem("user_profile_image", reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <main style={{ textAlign: "center", padding: "20px" }}>
//       <head>
//         <title>𝐁𝐄𝐀𝐌-𝐏𝐫𝐨𝐟𝐢𝐥𝐞</title>
//       </head>
//       <h2>Upload an Image</h2>

//       {/* Image Input */}
//       <input type="file" accept="image/*" onChange={handleImageChange} />

//       {/* Show preview */}
//       {image && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>Preview:</h3>
//           <img
//             src={image}
//             alt="preview"
//             style={{ width: "300px", borderRadius: "10px" }}
//           />
//         </div>
//       )}
//       <button onClick={removeUserProfileImage}>cancle</button>
//     </main>
//   );
// }

import React from 'react'

export default function Profile() {
  return (
    <main>
      <h1>Profile</h1>
      <h3>In progress</h3>
    </main>
  )
}
