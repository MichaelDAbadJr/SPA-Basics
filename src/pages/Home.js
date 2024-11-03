import {Link, useNavigate} from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate();

  // just example, you wouldn't do it like this, just example
  // to show how programmatically navigate
  function navigateHandler() {
    navigate('products');
  }
  return (
    <>
      <h1>My HomePage</h1>
      <p>
        Go to <Link to="products">the list of products</Link>.
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
