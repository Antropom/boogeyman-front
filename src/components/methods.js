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

const addVote = (vote, totalVote, id) => {
  const tempVote = vote + totalVote;
  if (tempVote >= 0) {
    const data = { votes: tempVote };
    return axios
      .put(`${process.env.REACT_APP_API_URL}/boogeymen/${id}`, data)
      .then(() => tempVote)
      .catch((error) => {
        console.log(error);
      });
  }
  return 0;
};

export { getBoogeymen, addVote };
