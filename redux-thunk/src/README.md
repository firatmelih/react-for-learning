without applying thunk as middleware you will get this error which is happening because in actions you're trying to implement a function insdie an action object.

with thunk you are being able to return functions inside actions.

Actions must be plain objects. Instead, the actual type was: 'function'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and
