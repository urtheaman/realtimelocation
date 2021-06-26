import { useEffect, useState } from "react";
import Modal from "../components/Modal";

// accuracy: 359766;
// altitude: null;
// altitudeAccuracy: null;
// heading: null;
// latitude: 25.0960742;
// longitude: 85.31311939999999;
// speed: null;
const MapCustom = () => {
  const [realTimeData, setRealTimeData] = useState({
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
  });
  /* =========================================
                        START
    Getting user location and watching position
    ========================================= */
  const success = async (position) => {
    const coords = await position.coords;
    console.log(coords);
    setRealTimeData({
      accuracy: coords.accuracy,
      altitude: coords.altitude,
      altitudeAccuracy: coords.altitudeAccuracy,
      heading: coords.heading,
      latitude: coords.latitude,
      longitude: coords.longitude,
      speed: coords.speed,
    });
  };
  const error = (e) => {
    switch (e.code) {
      case "PERMISSION_DENIED":
        return (
          <Modal>
            Permission denied by the user! Please allow access to use this
            feature.
          </Modal>
        );
      case "POSITION_UNAVAILABLE":
        return (
          <Modal>
            We're having some problems locating you. Please Reload the page.
          </Modal>
        );
      case "TIMEOUT":
        return <Modal>Sorry! Timeout! Please try again</Modal>;

      default:
        return <Modal>Error: {e}</Modal>;
    }
  };

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 1,
    };
    try {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(success, error, options);
      } else if (!navigator.geolocation) {
        return (
          <Modal className="">
            This browser doesn't support Geolocation, Please Update it!
          </Modal>
        );
      }
    } catch (e) {
      return (
        <Modal className="">
          Error: Hey! something went wrong! Please reload the page!
        </Modal>
      );
    }
  }, [realTimeData]);
  /* =========================================
                        END
    Getting user location and watching position
    ========================================= */

  // Rendering realTimeData
  return (
    <div>
      {Object.keys(realTimeData).map((key, index) => {
        return (
          <p key={index}>
            {key} : {realTimeData[key]}
          </p>
        );
      })}
      ;
    </div>
  );
};

export default MapCustom;
