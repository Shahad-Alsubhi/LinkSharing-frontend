import { createContext, SetStateAction, useState } from "react";

export interface user {
  firstName: string;
  lastName: string;
  visibleEmail?: string;
  picture?: File;
  links: Link[];
  pictureURL?: string | ArrayBuffer;
}
interface UserContextType {
  user: user;
  setUser: React.Dispatch<SetStateAction<user>>;
}
export interface Link {
  id: string;
  platform: string;
  url?: string;
}

export const UserContext = createContext<UserContextType>({
  user: { firstName: "", lastName: "", links: [] },
  setUser: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<user>({
    firstName: "",
    lastName: "",
    links: [],
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
