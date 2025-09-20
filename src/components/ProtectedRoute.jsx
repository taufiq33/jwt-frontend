import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { authSliceAction } from "../store/appStore";
import { requestNewAccessToken } from "../helper/access_token";

export default function ProtectedRoute() {
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    async function checkAccessToken(accToken) {
      setLoading(true);
      if (!accToken) {
        try {
          console.log("masuk blok ini");
          const newAccToken = await requestNewAccessToken();
          dispatch(authSliceAction.setAccessToken(newAccToken));
          setIsValid(true);
        } catch (error) {
          setIsValid(false);
        }
      } else {
        setIsValid(true);
      }
      setLoading(false);
    }

    checkAccessToken(accessToken);
  }, [accessToken, dispatch]);

  if (loading) {
    return <p>Checking session...</p>;
  }

  if (isValid) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} replace />;
  }
}
