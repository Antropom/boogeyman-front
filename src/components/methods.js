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

const order = (boogeyDatas, setOrderedKillers) => {
  const ordered = [];
  const arrLength = boogeyDatas.length;
  for (let i = 0; i < arrLength; i++) {
    const index = boogeyDatas.reduce((a, b, i) => (boogeyDatas[a].votes < b.votes ? i : a), 0);
    ordered.push(boogeyDatas[index]);
    boogeyDatas.splice(index, 1);
  }
  setOrderedKillers(ordered);
};

export { getBoogeymen, addVote, order };
