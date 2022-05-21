import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Tasks from "./Tasks";
import TodoInput from "./TodoInput";
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: "https://guided-burro-82.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": "HMRl64GqgvWwOr5AMCE5Z1IuldbXblYfmwWW71qVeo77I9ThuezwFaWRuhTWgIyN",
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
