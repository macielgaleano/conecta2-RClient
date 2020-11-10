import React from "react";
import { useSelector } from "react-redux";

export default function useFetchAllTweetsUser() {
  const user = useSelector((state) => state.user);
  const [tweets, setUserProfile] = useState(null);
  const url = "https://conecta2-server.vercel.app/" + "users/" + username;
  const params = { Authorization: user.token };

  useEffect(() => {
    if (!userProfile) {
      axios
        .get(url, params)
        .then((res) => {
          setUserProfile(res.data[1]);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  });
  return userProfile;
}
