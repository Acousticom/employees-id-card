import React from "react";
import { useUser } from "../context/UserContext";
import UserCard from "../component/UserCard";
import ShimmerCard from "../component/ShimmerCard";

const Home = () => {
  const { users, loading } = useUser();
  return (
    <div className="flex flex-wrap gap-6 justify-center py-8">
      {loading
        ? [...Array(8)].map((arr) => <ShimmerCard />)
        : users.map((user) => <UserCard user={user} key={user.id} />)}
    </div>
  );
};

export default Home;
