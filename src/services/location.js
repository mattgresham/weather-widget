const getLocation = async () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, () =>
      reject(new Error('Unable to get location.'))
    );
  });

export default getLocation;
