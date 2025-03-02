import { useContext, useEffect } from "react";
import Context from "../context/Context";

const AutoLocationFetcher = () => {
  const { setLocation,setError } = useContext(Context);

  const checkLocationPermission = () => {
    const savedPermission = localStorage.getItem('locationPermission');
    const expirationTime = localStorage.getItem('locationPermissionExpires');
    
    if (savedPermission && expirationTime) {
      if (new Date().getTime() < parseInt(expirationTime)) {
        return true;
      }
      // Clear expired permission
      localStorage.removeItem('locationPermission');
      localStorage.removeItem('locationPermissionExpires');
    }
    return false;
  };

  const saveLocationPermission = () => {
    const expirationTime = new Date().getTime() + (24 * 60 * 60 * 1000);
    localStorage.setItem('locationPermission', 'granted');
    localStorage.setItem('locationPermissionExpires', expirationTime.toString());
  };

  const requestLocation = () => {
    if (checkLocationPermission()) {
      // If permission was previously granted and not expired, get location directly
      getCurrentLocation();
      return;
    }

    const userConsent = window.confirm(
      "Do you want to share your location? This will help us provide better service."
    );

    if (!userConsent) {
      setError("Location access was denied by user.");
      return;
    }

    saveLocationPermission();
    getCurrentLocation();
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setError(null);
        },
        () => {
          setError("Failed to get location. Please enable location services.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      requestLocation();
    }, 1000);
  }, []);
};

export default AutoLocationFetcher;