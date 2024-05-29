import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Store from './store/store.ts';

interface IState {
  store: Store;
}
const store = new Store();
export const Context = createContext<IState>({ store });
let container: any = null;

document.addEventListener('DOMContentLoaded', () => {
  if (!container) {
    container = document.getElementById('root');
    const root = createRoot(container);
    root.render(
      <Context.Provider
        value={{
          store,
        }}
      >
        <App />
      </Context.Provider>
    );
  }
});
