import httpClient from '../http-user';

const getAll = () => {
  return httpClient.get('/api/GetProductOnJoin');//http://localhost:8080/employees
};

const delAuction = (id) => {
    return httpClient.delete(`/api/Auction/${id}`);//http://localhost:8080/employees
  };

  const addAuction = (data) => {
    return httpClient.post(`/api/Auction`,data);//http://localhost:8080/employees
  };

  const getProduct = (id) => {
    return httpClient.get(`/api/Products/${id}`);//http://localhost:8080/employees
  };

export default { getAll,delAuction,getProduct,addAuction};