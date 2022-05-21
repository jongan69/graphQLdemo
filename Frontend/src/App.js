import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Tasks from "./Tasks";
import TodoInput from "./TodoInput";
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: "HASURA_GraphQL_API_URL ",
  cache: new InMemoryCache(),
  headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": "ADMIN_SECRET",
    },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>ToDo App</p>
        </header>
        <br />
        <TodoInput />
        <Tasks />
      </div>
    </ApolloProvider>
  );
}

export default App;
