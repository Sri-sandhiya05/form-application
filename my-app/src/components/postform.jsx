import React, { useState } from 'react';
import './PostForm.css';

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    date: '',
    shortData: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { title, author, date, shortData } = formData;

    if (!title || !author || !date || !shortData) {
      alert('Please fill out all fields!');
      return;
    }

    console.log('Submitted:', formData);
    alert('Post submitted successfully!');

    setFormData({
      title: '',
      author: '',
      date: '',
      shortData: ''
    });
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h3>Create Blog Post</h3>

      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter blog title"
          aria-label="Title"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="author">Author:</label>
        <input
          id="author"
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author name"
          aria-label="Author"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          aria-label="Date"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="shortData">Short Description:</label>
        <textarea
          id="shortData"
          name="shortData"
          value={formData.shortData}
          onChange={handleChange}
          placeholder="Write a short summary..."
          aria-label="Short Description"
          rows="4"
          required
        ></textarea>
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default PostForm;
