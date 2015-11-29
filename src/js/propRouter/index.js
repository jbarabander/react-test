var cloneWithProps = require('react').cloneElement;

module.exports = function(element, state) {
    var elementToReturn = element;
    switch(element.props.route.path) {
        case '/users/:id':
            elementToReturn = cloneWithProps(element, {foundUser: state.currentUser});
            break;
    }
    return elementToReturn;
};