const has = Object.prototype.hasOwnProperty;

let reset = false;

/**
 * Iterates over an array of DOM elements, determines the highest element and applies its height to
 * all elements.
 *
 * @param group Array of elements
 */
const equalize = (group) => {
    const maxHeight = Math.max.apply(undefined, group.map($el => {
        if (reset) {
            $el.style.height = '';
        }

        return $el.getBoundingClientRect().height;
    }));

    group.forEach($el => $el.style.height = `${maxHeight}px`);
};

/**
 * Initializes the equalizer based on a DOM root node and groups the respective elements by their given
 * data-equalize value.
 *
 * @param $root Root element to start equalizing from
 * @param resetElements Resets the height to initial height
 */
const init = ($root = document, resetElements = false) => {
    const $elements = $root.querySelectorAll('[data-equalize]');
    const elementsArray = Array.prototype.slice.call($elements, 0).reverse();

    const groups = elementsArray.reduce((result, $element) => {
        const key = $element.getAttribute('data-equalize');

        result[key] = has.call(result, key)
            ? result[key].concat($element)
            : [$element];

        return result;
    }, {});

    reset = resetElements;

    Object.keys(groups).forEach(key => equalize(groups[key]));
};

export default init;
