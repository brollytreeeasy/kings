import './App.css';

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="kingscup/" element={<StartPage/>} />
        <Route path="kingscup/playpage/" element={<PlayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
