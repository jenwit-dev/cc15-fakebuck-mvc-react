import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import FriendPage from "../pages/FriendPage";
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "friend", element: <FriendPage /> },
      { path: "profile/:profileId", element: <ProfilePage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
