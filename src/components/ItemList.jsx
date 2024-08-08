const ItemList = ({ items, theme }) => {
    return (
      <div className={`item-list ${theme}`}>
        {items.map((item, index) => (
          <div key={index} className="item">
            <p>{item}</p> {/* Ensure item is a string or renderable component */}
          </div>
        ))}
      </div>
    );
  };
  
  export default ItemList;
  