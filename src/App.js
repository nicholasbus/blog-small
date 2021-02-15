import Header from './components/Header'
import NavPanel from './components/NavPanel'
import PostsList from './components/PostsList'
import RightPanel from './components/RightPanel'

function App() {
  return (
    <div className="App">
      <Header />
      <body className="flex h-screen items-stretch">
        <NavPanel />
        <PostsList />
        <RightPanel />
      </body>
    </div>
  );
}

export default App;
