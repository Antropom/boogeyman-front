import axios from 'axios';

// Get all boogeymen
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

// Vote method
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

// Ordering method, get an array with who as the most votes
const order = (boogeyDatas, setOrderedKillers) => {
  const ordered = [];
  const arrLength = boogeyDatas.length;
  for (let i = 0; i < arrLength; i += 1) {
    const index = boogeyDatas.reduce((a, b, ind) => (boogeyDatas[a].votes < b.votes ? ind : a), 0);
    ordered.push(boogeyDatas[index]);
    boogeyDatas.splice(index, 1);
  }
  setOrderedKillers(ordered);
};

// Classic handleChange
const handleChange = (e, killerDatas, setKillerDatas) => {
  setKillerDatas({
    ...killerDatas,
    [e.target.id]: e.target.value,
  });
};

//  PUT method
const editBoogeyman = (id, data) => {
  return axios
    .put(`${process.env.REACT_APP_API_URL}/boogeymen/${id}`, data)
    .then((res) => {
      console.log(res);
      return true;
    })
    .catch((error) => {
      console.log(error);
    });
};

// DELETE method
const deleteBoogeyman = (id) => {
  return axios
    .delete(`${process.env.REACT_APP_API_URL}/boogeymen/${id}`)
    .then((res) => {
      console.log(res);
      return true;
    })
    .catch((error) => {
      console.log(error);
    });
};

// POST method
const postBoogeyman = (data) => {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/boogeymen`, data)
    .then((res) => {
      console.log(res);
      return true;
    })
    .catch((error) => {
      console.log(error);
    });
};

export {
  getBoogeymen,
  addVote,
  order,
  handleChange,
  deleteBoogeyman,
  editBoogeyman,
  postBoogeyman,
};
