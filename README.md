# Tools

I bootstrapped the project with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\

## Other tools

State is managed through useReducer hook + React context. Considering that we needed to keep info about few properties, local state seemed like a reasonable option.

For coping with React keys I picked `nanoid` library - it's very lightweight (has no dependencies) and easily utilized.

For styling I chose `MaterialUI` - it's well-optimized and provides nice-looking, accessible CSS components out of the box. It allowed me to spend less time on styling in favor of a logic layer.

# TODO

- Fix excessive rerendering;
- Optimize images;
- Refactor input state managing.
