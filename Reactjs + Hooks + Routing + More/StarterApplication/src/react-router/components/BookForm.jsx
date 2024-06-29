import { Form, useNavigate } from 'react-router-dom';

import './BookForm.css';

function BookForm({ method, event }) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method='post' className="form">
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required />
      </p>
      <p>
        <label htmlFor="description">Price</label>
        <textarea id="price" name="price" rows="5" required />
      </p>
      <p>
        <label htmlFor="description">Author</label>
        <textarea id="author" name="author" rows="5" required />
      </p>
      <p>
        <label htmlFor="loggedDate">logged Date</label>
        <textarea id="loggedDate" name="loggedDate" rows="5" required />
      </p>
      <div className="actions">
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button >Save</button>
      </div>
    </Form>
  );
}

export default BookForm;



