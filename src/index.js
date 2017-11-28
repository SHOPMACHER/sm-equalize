const has = Object.prototype.hasOwnProperty;

/**
 * Iterates over an array of DOM elements, determines the highest element and applies its height to
 * all elements.
 *
 * @param group Array of elements
 */
const equalize = (group) => {
    const maxHeight = Math.max.apply(undefined, group.map($el => $el.getBoundingClientRect().height));

    group.forEach($el => $el.style.height = `${maxHeight}px`);
};

/**
 * Initializes the equalizer based on a DOM root node and groups the respective elements by their given
 * data-equalize value.
 *
 * @param $root Root element to start equalizing from
 */
export default ($root = document) => {
    const $elements = [...$root.querySelectorAll('[data-equalize]')];
    const groups = $elements.reduce((result, $element) => {
        const key = $element.getAttribute('data-equalize');

        result[key] = has.call(result, key)
            ? result[key].concat($element)
            : [$element];

        return result;
    }, {});

    Object.keys(groups).forEach(key => equalize(groups[key]));
};
