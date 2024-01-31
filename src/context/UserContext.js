import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://jsonplaceholder.typicode.com/users";
  const fetchUsers = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchUsers(url);
  }, []);
  return (
    <UserContext.Provider value={{ users,loading }}>{children}</UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);
export { useUser, UserContextProvider };
