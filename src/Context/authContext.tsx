import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import axiosInstance from "../api/axiosInstance";

export const AuthContext = createContext<{
  authToken: string;
  setAuthToken: React.Dispatch<SetStateAction<string>>;
  isLoading: boolean;
}>({
  authToken: "",
  setAuthToken: () => {},
  isLoading: false,
});
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authToken, setAuthToken] = useState<string>("");
  const [isLoading, seIsLoading] = useState(true);

  useEffect(() => {
    async function checkRefreshToken() {
      axiosInstance
        .post("/auth/refresh-token")
        .then((res) => {
          const { accessToken } = res.data;
          if (accessToken) {
            setAuthToken(accessToken);
          }
          seIsLoading(false);
        })
        .catch((e) => {
          console.log(e);
          seIsLoading(false);
        });
    }
    checkRefreshToken();
  }, []);
  return (
    <AuthContext.Provider value={{ authToken, setAuthToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
