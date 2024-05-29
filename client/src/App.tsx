import { FC, useContext, useEffect, useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import { Context } from './main';
import { observer } from 'mobx-react-lite';
import { IUser } from './models/IUser';
import UserService from './services/UserService';

const App: FC = () => {
  const { store } = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  if (store.isLoading) {
    return <div>Loading......................</div>;
  }

  const getUsers = async () => {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };

  if (!store.isAuth) {
    return (
      <>
        <LoginForm />
        <button onClick={getUsers}>Get users list</button>
      </>
    );
  }

  return (
    <>
      <h1>
        {store.isAuth
          ? `authorized user - ${store.userInfo.login} : ${store.userInfo.email}`
          : 'not authorized'}
      </h1>
      <button onClick={() => store.logout()}>LogOut</button>
      <div>
        <button onClick={getUsers}>Get users list</button>
      </div>
      {users.map((e) => {
        return (
          <div key={e.email}>
            <br />
            <div>{e.userId}</div>
            <div>login - {e.login}</div>
            <div>email - {e.email}</div>
          </div>
        );
      })}
    </>
  );
};

export default observer(App);
