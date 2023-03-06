import { useState, useContext } from "react";
import ProductContext from "../../../../context/products";
const ProductEdit = ({ product, onSubmit }) => {
  const { editProductById } = useContext(ProductContext);
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);
  const [image, setImage] = useState(product.image);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
    editProductById(
      product.id,
      product.date,
      title,
      category,
      price,
      description,
      image
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-edit">
      <label className="edit-label">
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <label className="edit-label">
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="edit-label">
        Image URL:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <label className="edit-label">
        Price:
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label className="edit-label">
        Description
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button>Save</button>
    </form>
  );
};
export default ProductEdit;
