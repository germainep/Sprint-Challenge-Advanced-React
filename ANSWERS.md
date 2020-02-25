- [ ] Why would you use class component over function components (removing hooks from the question)?
  You would use class components when working with legacy code, to have access to lifecycle hooks.
- [ ] Name three lifecycle methods and their purposes.
  componentDidMount - get called as soon as the component mounts to set initial data to the component.
  componentDidUpdate - gets called after updating occurs. Give the oppertunity to operate on the DOM as soon as a component updates.
  getDerivedStateFromProps - called before the render method. Allow updating the state on initial mount and for updates
- [ ] What is the purpose of a custom hook?
  To build stateful logic.
- [ ] Why is it important to test our apps?
  To find bugs in code before they make it into production.