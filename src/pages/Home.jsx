import React from "react";
import { useUser } from "../context/UserContext";
import UserCard from "../component/UserCard";

const Home = () => {
    const {users}=useUser()
  return (
    <div className="flex flex-wrap gap-6 justify-center py-8"> 
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Home;
