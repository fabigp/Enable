import React, { useContext } from "react";
import "./styles.css";
import BlogEditor from "./components/BlogEditor.jsx";
import PostList from "./components/PostList.jsx";
import Login from "./components/Login";
import { AuthProvider, AuthContext } from "./components/AuthProvider";
import LogoutButton from "./components/LogoutButton.jsx";
import UserInfo from "./components/UserInfo.jsx";
import Signup from "./components/Signup.jsx";
import UpdateUser from "./components/UpdateUser.jsx";
import Header from "./components/Header.jsx";
import NewPost from "./components/NewPost.jsx";

const App = () => {
  return (
    <AuthProvider>
      <MainContent></MainContent>
    </AuthProvider>
  );
};

const MainContent = () => {
  const { authToken } = useContext(AuthContext);

  return (
    <div className="App">
      {authToken ? (
        <>
          <LogoutButton />
          <BlogEditor />
          <Signup />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
