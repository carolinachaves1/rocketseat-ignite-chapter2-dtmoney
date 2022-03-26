import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          tittle: 'Freelance',
          type: 'deposit',
          amount: 6320,
          category: 'Work',
          createdAt: new Date('2022-03-22 20:22:00')
        },
        {
          id: 2,
          tittle: 'Conta de telefone',
          type: 'withdraw',
          amount: 100,
          category: 'Home',
          createdAt: new Date('2022-03-22 21:00:00')
        }
      ],
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

