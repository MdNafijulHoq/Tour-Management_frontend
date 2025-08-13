import { Outlet } from "react-router";
import CommonLayout from "./components/layout/CommonLayout";

const App = () => {
  // console.log(generateRoutes(adminSidebarItems));

  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
};

export default App;
