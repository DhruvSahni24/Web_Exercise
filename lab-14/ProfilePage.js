import React from "react";
import ProfileImage from "./ProfileImage.js";
import UserInfo from "./UserInfo.js";
import UserPosts from "./UserPosts.js";

const ProfilePage = () => {
  const user = {
    imageUrl: "/profile.jpg",
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Software Developer & Tech Enthusiast",
    posts: ["Learning React!", "Building projects!", "Exploring new tech!"]
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <ProfileImage imageUrl={user.imageUrl} />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
};

export default ProfilePage;
