class DataSource {
  static fetchJSON(url) {
    return fetch(url)
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((responseJson) => {
        if (Object.keys(responseJson).length !== 0) {
          return Promise.resolve(responseJson);
        } else {
          return Promise.reject(`${url} is empty`);
        }
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

export default DataSource;
