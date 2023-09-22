import httpClient from '../http-user';

const getAll = () => {
  return httpClient.get('/api/GetProductOnJoinFromAuction');
};

const create = (data) => {
  return httpClient.post('/api/Product', data);
};

const GetAllProduct = () => {
  return httpClient.get('/api/Product');
};

//.get(`http://localhost:8292/api/BiddingStoredProcedure/${params.id}`)

const GetProducAuctionByID = (id) => {
    return httpClient.get(`/api/GetProducAuctionByID/${id}`);
  };

  const BiddingStoredProcedure = (id) => {
    return httpClient.get(`/api/BiddingStoredProcedure/${id}`);
  };

const getUserProduct = (id) => {
  return httpClient.post("/api/GetUserProduct",id);
};

const GetProductOnJoinFromAuction = () => {
  return httpClient.get('/api/GetProductOnJoinFromAuction');
};

const productByID = (id) => {
  return httpClient.get(`/api/Products/${id}`);
};

const Bid = (bidx) => {
  return httpClient.post("/api/Bid",bidx);
};
export default { Bid,BiddingStoredProcedure,getAll, create, getUserProduct, GetProductOnJoinFromAuction, productByID ,GetProducAuctionByID,GetAllProduct};