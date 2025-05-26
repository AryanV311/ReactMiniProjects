import React, { useContext, useState } from "react";
import "./profile.css";
import avatar from "../assets/avatarrr.avif";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import uupload_icon from "../assets/upload_icon.png";
import axios from "axios";
import { toast } from "react-toastify";

export const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { token, userData, setUserData, loadUserProfileDetails } =
    useContext(AppContext);

  console.log(userData);

  const [image, setImage] = useState(false);
  const navigate = useNavigate();

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();

      formData.append("name", userData.name);

      image && formData.append("photo", image);

      console.log(formData);

      const {data} = await axios.post("http://localhost:5000/api/user/update-profile",formData,{headers:{Authorization:`Bearer ${token}`}})

      console.log("data", data);

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileDetails();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!userData) return <h2>Loading profile...</h2>;

  return (
    <div className="profile-popup-overlay">
      <div className="profile-popup-card">
        <p
          onClick={() => navigate("/")}
          style={{
            padding: "5px",
            borderRadius: "4px",
            backgroundColor: "blue",
            display: "inline-block",
            color: "white",
            cursor: "pointer",
          }}
        >
          Go back
        </p>
        <div className="profile-image-section">
          {isEdit ? (
            <label htmlFor="image">
              <div className="img-section">
                <img
                  src={image ? userData.photo : avatar}
                  alt=""
                  className="img1"
                />
                <img src={uupload_icon} alt="" className="img2" />
              </div>
              <input
                type="file"
                onClick={(e) => setImage(e.target.files[0])}
                id="image"
                hidden
              />
            </label>
          ) : (
            <img src={userData.photo} alt="Profile Avatar" />
          )}
        </div>
        <div className="profile-info-section">
          <div className="info-row">
            <p className="label">Name:</p>
            {isEdit ? (
              <input
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, name: e.target.value }))
                }
                style={{
                  border: "1px solid grey",
                  padding: "4px",
                  borderRadius: "4px",
                }}
              />
            ) : (
              <p className="value">{userData.name}</p>
            )}
          </div>
          <div className="info-row">
            <p className="label">Email:</p>

            <p className="value">{userData.email}</p>
          </div>
          <div className="save-btn">
            {isEdit ? (
              <button className="edit-btn" onClick={updateUserProfileData}>
                Save Informations
              </button>
            ) : (
              <button className="edit-btn" onClick={() => setIsEdit(true)}>
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
