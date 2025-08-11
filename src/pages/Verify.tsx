import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Verify = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email] = useState(location.state);

  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email, navigate]);
  return (
    <div>
      <h3>Welcome to verify page - {email}</h3>
    </div>
  );
};

export default Verify;
