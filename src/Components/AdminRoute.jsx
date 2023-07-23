import { useSelector } from "react-redux";


function AdminRoute({ children }) {

  const { user } = useSelector((store) => {
    return store.auth;
  });
    

  if (user ==="Admin") return <>{children}</>;
  else {
    return <></>
  }
}

export default AdminRoute;
