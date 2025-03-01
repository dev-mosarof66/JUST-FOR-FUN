import { useContext, useEffect } from "react";
import Context from "../context/Context";
const AutoLocationFetcher = () => {
  const { setLocation } = useContext(Context);
  const { setError } = useContext(Context);

  const requestLocation = () => {
    const userConsent = window.confirm(
      "Do you allow us to access your location?"
    );

    if (!userConsent) {
      setError("You denied location access.");
      return;
    }

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
