1. What problem does the context API help solve?
to prevent state from constantly changing.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions - takes in a type that is searched through the reducer to dispatch a state change.
Reducers - State management on a global scale
Store - Stores the reducer so that it can be used by all components globally.
The single source of truth means the only way to change something is to go through the reducer.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application/Component state differ for different circumstances, such as if you need to pass state to multiple components then you would use Application state.
if you are doing something simple then use Component state.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Thunk is middle ware that allows us to dispatch multiple actions to a reducer.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
Redux, it is very powerful and makes sense the most to me, Despite taking time to set up. it feels more organized once you know what you are doing.
