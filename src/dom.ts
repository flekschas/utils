const XMLNS = "http://www.w3.org/2000/svg";

/**
 * Method to add a class name to an HTML or SVG element.
 * @param element - HTML or SVG element to add a class to.
 * @param className - The class name to be added.
 */
export const addClass = (
	element: HTMLElement | SVGElement,
	className: string,
) => {
	if (element.namespaceURI === XMLNS) {
		if (!hasClass(element, className)) {
			const klass = element.getAttribute("class") || "";
			element.setAttribute("class", `${klass} ${className}`);
		}
	} else if (element.classList) {
		element.classList.add(className);
	} else if (!hasClass(element, className)) {
		(element as HTMLElement).className += ` ${className}`;
	}
};

/**
 * Create HTML from a template string
 * @param template - HTML template string
 * @return Root DOM element
 */
export const createHtmlByTemplate = (template: string): Node | null => {
	const dummyEl = document.createElement("div");
	dummyEl.insertAdjacentHTML("beforeend", template);
	return dummyEl.firstChild;
};

/**
 * Check if an HTML or SVG element has a certain class
 * @param element - HTML or SVG element to be checked
 * @param className - Class name to be checked for
 * @return If `true` `element` has the class name
 */
export const hasClass = (
	element: HTMLElement | SVGElement,
	className: string,
): boolean => {
	if (element.namespaceURI === XMLNS) {
		const klass = element.getAttribute("class");
		return (
			klass !== null && !!klass.match(new RegExp(`(\\s|^)${className}(\\s|$)`))
		);
	}

	if (element.classList) {
		return element.classList.contains(className);
	}

	return !!element.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`));
};

/**
 * Test whether a DOM element is the parent of another DOM element.
 *
 * @param element - Potential child element.
 * @param parent - Target parent element which is tested to have `el`
 *   as a child.
 * @return If `true` `parent` is a parent of `element`.
 */
export const isParentOf = (
	element: HTMLElement,
	parent: HTMLElement,
): boolean => {
	let el: HTMLElement | null = element;

	while (el && el !== parent && el.tagName !== "HTML") {
		el = el.parentNode as HTMLElement | null;
	}

	return el === parent;
};

/**
 * Remove all children of a DOM node
 * @param node - DOM node whose children are to be removed
 */
export const removeAllChildren = (node: Node) => {
	while (node.firstChild) {
		node.removeChild(node.firstChild);
	}
};

/**
 * Remove last child of a DOM node
 * @param node - DOM node whose last child is to be removed
 */
export const removeLastChild = (node: Node) => {
	if (!node.lastChild) return;
	node.removeChild(node.lastChild);
};

/**
 * Remove a class from an HTML or SVG element.
 * @param element - HTML or SVG element.
 * @param className - Class name to be removed.
 */
export const removeClass = (
	element: HTMLElement | SVGElement,
	className: string,
) => {
	const reg = new RegExp(`(\\s|^)${className}(\\s|$)`);

	if (element.namespaceURI === XMLNS) {
		const klass = element.getAttribute("class") || "";
		element.setAttribute("class", klass.replace(reg, " "));
	} else if (element.classList) {
		element.classList.remove(className);
	} else if (hasClass(element, className)) {
		(element as HTMLElement).className = (
			element as HTMLElement
		).className.replace(reg, " ");
	}
};
