function App() {
  //document.getElementById('root').innerHTML = 'This is also visible';
  const para = document.createElement('p');
  para.textContent = `this is also visible`; 
  document.getElementById('root').append(para);
  return (
    <div>
      <h2>Let's get started!</h2>
      <p> This is also visible</p>
    </div>
  );
}

export default App;
