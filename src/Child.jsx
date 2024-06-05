import PropTypes from "prop-types"

export function Child({ name, age, children, address }) {
  return(
    <>
    <br />
    Welcome {name} Age: { age+10 }
    <br />
    { address.street }
    { address.city }
    <br />
    { children }
    </>
  )
}

Child.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  status: PropTypes.oneOf(["LOADING"]),
  children: PropTypes.node,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
  }).isRequired
}