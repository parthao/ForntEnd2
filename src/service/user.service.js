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


const OTPME = (data) => {
  return httpClient.put('/api/OTPMatch',data);//http://localhost:8080/employees
};

const ForgetME = (data) => {
  return httpClient.post('/api/ForgetPass',data);//http://localhost:8080/employees
};

const AllUser = () => {
  return httpClient.get('/api/UserEmail');//http://localhost:8080/employees
};


export default { AllUser,OTPME,ForgetME, LoginME,RegisMe,EmailMe};