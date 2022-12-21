import './ItemsListContainer.css'

const ItemsListContainer = ({ greetings }) => {
  return (
    <div className="wellcomeMessage">
      <p>{greetings}</p>
    </div>
  );
};

export default ItemsListContainer;
