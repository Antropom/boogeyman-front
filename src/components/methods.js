import axios from 'axios';

const getBoogeymen = (setBoogeyDatas) => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/boogeymen`)
    .then((res) => {
      setBoogeyDatas(res.data.results);
    })
    .catch((error) => {
      setBoogeyDatas([]);
      console.log(error);
    });
};

export default getBoogeymen;
