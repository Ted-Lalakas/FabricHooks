import * as React from 'react';
import { useState } from 'react';


const SimpleForm = (props) => {
  const [ enteredTitle, setEnteredTitle ] = useState('');
  const [ enteredAmount, setEnteredAmount ] = useState('');

  console.log("Title Entered: ",enteredTitle);
  console.log("Amount Entered: ",enteredAmount);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Title Entered: ",enteredTitle);
    console.log("Amount Entered: ",enteredAmount);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="title">Name</label>
        <input 
          type="text" 
          id="title" 
          value={enteredTitle} 
          onChange={event => {
            setEnteredTitle(event.target.value);
            }
          } 
        />
      </div>
      <div className="form-control">
        <label htmlFor="amount">Amount</label>
        <input 
          type="number" 
          id="amount" 
          value={enteredAmount} 
          onChange={event => {
            setEnteredAmount(event.target.value);
            }
          } 
        />
      </div>
      <div className="ingredient-form__actions">
        <button type="submit">Add Ingredient</button>
      </div>
    </form>
  );
}

export default SimpleForm;