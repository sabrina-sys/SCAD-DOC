import Users from './data-user.json';

const Auth = (user)=>{ 
   return Users.filter(item => item.user === user) 
}

export default Auth;