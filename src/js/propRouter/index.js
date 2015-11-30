var cloneElement = require('react').cloneElement;

module.exports = function(element, state) {
    var elementToReturn = element;
    switch(element.props.route.path) {
        case '/users/:id':
            elementToReturn = cloneElement(element, {foundUser: state.currentUser});
            break;
    }
    return elementToReturn;
};