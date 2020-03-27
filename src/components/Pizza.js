import React, { useState } from 'react';
import axios from 'axios';

export default function Pizza() {
  const formSubmit = e => {
    e.preventDefault();
    // preventing standard operation of forms
    axios
      .post('https://reqres.in/api/users', formValues)
      .then(res => {
        setPost(res.data); // get just the form data from the REST api
        console.log('success', res);
        // reset form if successful
        // sending a request to enpoint and storing value in state
        setFormValues({
          name: '',
          email: '',
          special: ''
        });
        // setformvalues is returning blanks after submitting
        return post;
      })
      .catch(err => console.log(err.response));
  };
  // storing the return value of my request
  const [post, setPost] = useState([]);
  // storing the values of my form
  const [formValues, setFormValues] = useState({});
  // throws data into form value state
  const onInputChange = event => {
    // use the event object
    // to fish out WHICH input is having the change event
    const inputThatChanged = event.target.name;
    // to fish out the current value
    const newValueForInput = event.target.value;
    // and replace the WHOLE formValues object

    setFormValues({
      // with a new one that's a copy of the old one
      ...formValues,
      // BUT with a little override
      [inputThatChanged]: newValueForInput
    });
  };
  // creating inputs
  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          required
          minlength="2"
          onChange={onInputChange}
          value={formValues.name}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="text"
          name="email"
          onChange={onInputChange}
          value={formValues.email}
        />
      </label>

      <label for="cheese"> cheese </label>
      <input type="checkbox" name="topping0" onChange={onInputChange} />
      <label for="sausage"> sausage</label>
      <input type="checkbox" name="topping1" onChange={onInputChange} />
      <label for="sweet potato"> sweet potato</label>
      <input type="checkbox" name="topping2" onChange={onInputChange} />
      <label for="mushroom"> mushroom</label>
      <input type="checkbox" name="topping3" onChange={onInputChange} />

      <label htmlFor="sizes">
        Pizza Size
        <select id="sizes" name="sizes" onChange={onInputChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="X-Large">X-Large</option>
        </select>
      </label>

      <label htmlFor="special">
        Special Instructions
        <input
          type="text"
          name="special"
          onChange={onInputChange}
          value={formValues.special}
        />
      </label>

      <button>Submit</button>
    </form>
  );
}
