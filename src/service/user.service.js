import httpClient from '../http-user';

const LoginME = (data) => {
  return httpClient.post('/api/Login',data);//http://localhost:8080/employees
};

const RegisMe = (data) => {
  return httpClient.post('/api/UserRegis',data);//http://localhost:8080/employees
};


const EmailMe = (data) => {
  return httpClient.post('/email',data);//http://localhost:8080/employees
};


// const create = (data) => {
//   return httpClient.post('/api/Product', data);
// };

// const get = (id) => {
//   return httpClient.get(`${id}`);
// };

// const update = (data) => {
//   return httpClient.put('', data);
// };

// const remove = (id) => {
//   return httpClient.delete(`/delSingle/${id}`);
// };
export default { LoginME,RegisMe,EmailMe};