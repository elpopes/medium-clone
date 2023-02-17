// import { useState, useRef } from "react";
// import csrfFetch from "../../store/csrf";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";

// const StoryPhotoButton = ({ onPhotoSelect }) => {
//   const [photoFile, setPhotoFile] = useState(null);
//   const [photoUrl, setPhotoUrl] = useState(null);
//   const [imageFiles, setImageFiles] = useState([]);
//   const [imageUrls, setImageUrls] = useState([]);
//   const fileRef = useRef(null);
//   const [currentAvatar, setCurrentAvatar] = useState(null);
//   const currentUser = useSelector((state) => state.session.user);

//   //   useEffect(() => {
//   //     async function fetchData() {
//   //   const response = await csrfFetch(`/api/stories/${currentUser.id}`);
//   //   const data = await response.json();
//   //   if (data.avatar) {
//   //     setCurrentAvatar(data.avatar);
//   //       }
//   //     }
//   //     fetchData();
//   //   }, [currentUser.id]);

//   const handleFile = ({ currentTarget }) => {
//     const file = currentTarget.files[0];
//     setPhotoFile(file);
//     if (file) {
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(file);
//       fileReader.onload = () => setPhotoUrl(fileReader.result);
//     } else setPhotoUrl(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("story[photo]", photoFile);

//     // const response = await csrfFetch("/api/photos", {
//     //   method: "POST",
//     //   body: formData,
//     // });
//     // if (response.ok) {
//     //   const photo = await response.json();
//     //   onPhotoSelect(photo.photoUrl);
//     //   setPhotoFile(null);
//     //   fileRef.current.value = null;
//     // }
//   };

//   return (
//     <div>
//       <button onClick={() => fileRef.current.click()}>Story Photo</button>
//       <form onSubmit={handleSubmit}>
//         <input type="file" ref={fileRef} onChange={handleFile} />
//         <button>Upload</button>
//       </form>
//     </div>
//   );
// };

// export default StoryPhotoButton;
