# DES Channels UI coding exercise

> The intention of this exercise is to assess a candidate's ability to design and develop loosely coupled user interface systems. We pay attention to general JavaScript knowledge, as well as *React 16* and the *node* and *npm* ecosystem.

## Part 1: Library Project

## Part 2: UI project

## Test Server

As part of the exercise you're given a test service that provides data in the appropriate format.

Start the server:

```bash
npm run server
```

> Every time you start the server you'll get 1000 new transactions. Old server states are not persisted between restarts.

Listing all transactions:

```bash
curl http://localhost:3000/api/transactions
```

Getting the transaction with `id=1`:

```bash
curl http://localhost:3000/api/transactions/1
```

Creating a new transaction:

```bash
curl http://localhost:3000/api/transactions \
  -X POST -H "Content-Type:application/json" \
  -d '{"amount": 85.91,"date": "2012-02-02T00:00:00.000Z","business": "Bode - Kreiger","name": "Savings Account 6670","type": "withdrawal","account": "86389677"}'
```

See the [json-server](https://github.com/typicode/json-server) documentation for reference on the underlying server.


