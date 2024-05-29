import React, { FC, useContext, useState } from 'react';
import { Context } from '../../main';
import { observer } from 'mobx-react-lite';

const LoginForm: FC = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { store } = useContext(Context);

  return (
    <div>
      <input
        onChange={(e) => setLogin(e.target.value)}
        value={login}
        type='text'
        placeholder='Login'
      />

      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type='password'
        placeholder='Password'
      />

      <button
        onClick={() =>
          store.login(login, password, 'i.am.muffin.osnova@gmail.com')
        }
      >
        Login
      </button>
      <button
        onClick={() =>
          store.registration(login, password, 'i.am.muffin.osnova@gmail.com')
        }
      >
        Registration
      </button>
    </div>
  );
};

export default observer(LoginForm);
