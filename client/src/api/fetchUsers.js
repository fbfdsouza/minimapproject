import axios from "axios";

const fetchUsers = async () => {
  // Make a request for a user with a given ID
  try {
    const response = await axios.get("http://localhost:3001/people");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default fetchUsers;
