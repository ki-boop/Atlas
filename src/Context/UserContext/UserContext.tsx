import React, { useContext, useState } from "react";

interface UserData {
  email: string;
  name: string;
  full_name: string;
  picture: string;
  greeting: boolean;
  role: string;
}

const UserContext = React.createContext({} as UserData);
const NewUserContext = React.createContext((newUser: UserData) => {});
const UserLogInContext = React.createContext(false);
const UserLogOutContext = React.createContext(() => {});

export const useUser = () => {
  return useContext(UserContext);
};

export const useNewUser = () => {
  return useContext(NewUserContext);
};

export const useUserLogIn = () => {
  return useContext(UserLogInContext);
};
export const useUserLogOut = () => {
  return useContext(UserLogOutContext);
};

export const UserProvider = ({ children }: any) => {
  const [data, setData] = useState({} as UserData);

  const deleteUserData = () => setData({} as UserData);

  const newUserData = (newUser: UserData) => setData(newUser);

  return (
    <UserContext.Provider value={data}>
      <NewUserContext.Provider value={newUserData}>
        <UserLogInContext.Provider value={data.name !== undefined}>
          <UserLogOutContext.Provider value={deleteUserData}>
            {children}
          </UserLogOutContext.Provider>
        </UserLogInContext.Provider>
      </NewUserContext.Provider>
    </UserContext.Provider>
  );
};
