
/* Smart UI v15.2.0 (2023-04-20) 
Copyright (c) 2011-2023 jQWidgets. 
License: https://htmlelements.com/license/ */ //

const namespace = 'Smart';

class BindingModule {

	static get moduleName() {
		return 'BindingModule';
	}

	/**
	 * @typedef {Object} bindings
	 * @property {Array<Node>} children The child nodes.
	 * @property {Node} node The node.
	 * @property {BindingData} data The node's binding data.
	 */

	/**
	 * @typedef {Object} BindingData
	 * @property {Boolean} twoWay - Deterimes whether it's one way or two way data binding.
	 * @property {Boolean} updating - Determines whether the node is in update state.
	 * @property {Object}  value - The bound property's value.
	 * @property {String}  name - The bound property's name.
	 */
	getBindings(node, ownerMap) {
		const that = this;

		let index = 0;
		let map = {
		};
		let boundData = (node => {
			if (node instanceof HTMLElement) {
				return that.parseAttributes(node);
			}
			else {
				let boundProperty = that.parseProperty(node.data ? node.data.trim() : null, 'textContent', node);

				if (boundProperty) {
					if (that.ownerElement && node.parentNode === that.ownerElement.$.content) {
						boundProperty.value = that.ownerElement.$.html !== '' ? that.ownerElement.$.html : undefined;
						that.ownerElement.innerHTML = '';
					}

					return {
						'textContent': boundProperty
					};
				}
			}

			return undefined;
		})(node);

		if (boundData) {
			map.data = boundData;
		}

		if (!ownerMap) {
			map.mapping = [];
			ownerMap = map;
		}

		if (node.getAttribute) {
			map.nodeId = node.getAttribute('smart-id');

			if (ownerMap && boundData) {
				ownerMap.mapping[map.nodeId] = boundData;
			}
		}

		map.node = node;

		if (node.firstChild) {
			map.children = {
			};
		}

		for (let child = node.firstChild; child; child = child.nextSibling) {
			map.children[index++] = that.getBindings(child, ownerMap);
		}

		return map;
	}

	_addRemovePropertyBinding(hostPropertyName, targetPropertyName, targetElement, removeBinding, parentElement) {
		if (!hostPropertyName || !targetPropertyName || !targetElement) {
			return;
		}

		const that = this;
		const bindings = that.ownerElement.bindings;
		const id = targetElement.getAttribute('smart-id');
		const twoWayBinding = hostPropertyName.indexOf('{{') >= 0;

		hostPropertyName = hostPropertyName.replace('{{', '').replace('}}', '').replace('[[', '').replace(']]', '');

		let not = false;

		if (hostPropertyName.indexOf('!') >= 0) {
			hostPropertyName = hostPropertyName.replace('!', '');
			not = true;
		}

		const hostProperty = that.ownerElement._properties[hostPropertyName];
		const boundProperty = {
			name: hostPropertyName, reflectToAttribute: hostProperty.reflectToAttribute, twoWay: twoWayBinding, type: hostProperty.type, not: not
		};

		if (parentElement && !removeBinding) {
			const map = {};

			const targetBoundProperty = {
				name: hostPropertyName, targetPropertyName: targetPropertyName, reflectToAttribute: hostProperty.reflectToAttribute, twoWay: twoWayBinding, type: hostProperty.type, not: not
			};

			map[hostPropertyName] = targetBoundProperty;
			bindings.mapping[id] = map;
		}

		const setBinding = function (boundChildren) {
			for (let childIndex in boundChildren) {
				const child = boundChildren[childIndex];

				if (child.nodeId === id) {
					if (!child.data) {
						child.data = {
						};
					}

					if (removeBinding) {
						child.data[targetPropertyName] = null;
						delete child.data[targetPropertyName];
					}
					else {
						child.data[targetPropertyName] = boundProperty;
					}

					break;
				}

				if (child.children) {
					setBinding(child.children);
				}
				else if (child.node && child.node.children && child.node === targetElement.parentElement) {
					const node = child.node;

					if (node.firstChild) {
						child.children = {
						};
					}
					else {
						continue;
					}

					let index = 0;

					for (let currentChild = node.firstChild; currentChild; currentChild = currentChild.nextSibling) {
						child.children[index++] = that.getBindings(currentChild);
					}

					setBinding(child.children);
				}
			}
		}
		setBinding(bindings.children);

		if (!removeBinding) {
			that.ownerElement.boundProperties[hostPropertyName] = true;
		}
		else {
			delete that.ownerElement.boundProperties[hostPropertyName];
		}

		that.updateBoundNodes(hostPropertyName);
	}

	addPropertyBinding(hostPropertyName, targetPropertyName, targetElement, parentElement) {
		const that = this;

		that._addRemovePropertyBinding(hostPropertyName, targetPropertyName, targetElement, false, parentElement);
	}

	removePropertyBinding(hostPropertyName, targetPropertyName, targetElement, parentElement) {
		const that = this;

		that._addRemovePropertyBinding(hostPropertyName, targetPropertyName, targetElement, true, parentElement);
	}

	/**
	 * Parses the element's attributes.
	 * @param {HTMLElement} - html element.
	 * @return {Array<BindingData>}
	 */
	parseAttributes(htmlElement) {
		const that = this;

		let boundProperties = undefined;

		for (let i = 0; i < htmlElement.attributes.length; i++) {
			const attribute = htmlElement.attributes[i];
			const attributeName = attribute.name;
			const attributeValue = attribute.value;
			if (!BindingModule.cache['toCamelCase' + attributeName]) {
				BindingModule.cache['toCamelCase' + attributeName] = window[namespace].Utilities.Core.toCamelCase(attributeName);
			}

			const propertyName = BindingModule.cache['toCamelCase' + attributeName];

			if (attributeName.indexOf('(') >= 0) {
				let eventName = attributeName.substring(1, attributeName.length - 1);
				if (that.ownerElement && !that.ownerElement.dataContext) {
					that.ownerElement.templateListeners[htmlElement.getAttribute('smart-id') + '.' + eventName] = attributeValue;
					htmlElement.removeAttribute(attributeName);
					continue;
				}
				else {
					if (!boundProperties) {
						boundProperties = {
						};
					}

					const handlerName = attributeValue.substring(0, attributeValue.indexOf('('));

					boundProperties[propertyName] = {
						isEvent: true, name: eventName, value: handlerName
					};
					continue;
				}
			}

			let boundProperty = that.parseProperty(attributeValue, attributeName, htmlElement);
			if (!boundProperty) {
				continue;
			}

			if (!boundProperties) {
				boundProperties = {
				};
			}

			boundProperties[propertyName] = boundProperty;
		}

		return boundProperties;
	}

	/**
	 * Parses a property.
	 * @param {String} - The string to parse.
	 * @param {name} - property's name.
	 * @param {Node} - the node.
	 * @return {BindingData}
	 */
	parseProperty(text, elementAttributeName/*, name, node*/) {
		if (!text || !text.length)
			return;

		const that = this;

		let boundProperty;
		let length = text.length;
		let startIndex = 0, lastIndex = 0, endIndex = 0;
		let twoWay = true;

		while (lastIndex < length) {
			startIndex = text.indexOf('{{', lastIndex);
			let twoWayStart = text.indexOf('[[', lastIndex);
			let terminator = '}}';

			if (twoWayStart >= 0 &&
				(startIndex < 0 || twoWayStart < startIndex)) {
				startIndex = twoWayStart;
				twoWay = false;
				terminator = ']]';
			}

			endIndex = startIndex < 0 ? -1 : text.indexOf(terminator, startIndex + 2);

			if (endIndex < 0) {
				return;
			}

			boundProperty = boundProperty || {
			};
			let pathString = text.slice(startIndex + 2, endIndex).trim();
			let attributeName = pathString;

			/*   if (twoWay) {
				   const updateToken = function (value) {
					   boundProperty.value = value;

					   if (node.$ && node.$.isNativeElement) {

						   if (!BindingModule.cache['toDash' + name]) {
							   BindingModule.cache['toDash' + name] = Utilities.Core.toDash(name);
						   }

						   const attributeName = BindingModule.cache['toDash' + name];
						   const oldValue = node.$.getAttributeValue(attributeName, boundProperty.type);

						   if (oldValue !== boundProperty.value) {
							   node.$.setAttributeValue(attributeName, boundProperty.value, boundProperty.type);
						   }
					   }
				   }

				   if (pathString.indexOf('::') >= 0) {
					   const eventIndex = pathString.indexOf('::');
					   const eventName = pathString.substring(eventIndex + 2);

					   that.ownerElement['$' + node.getAttribute('smart-id')].listen(eventName, function () {
						   updateToken(node[name]);

						   const boundPropertyName = boundProperty.name.substring(0, boundProperty.name.indexOf('::'));
						   that.updateBoundProperty(boundPropertyName, boundProperty);
					   });
				   }

				   if (node.$ && node.$.isCustomElement) {
					   if (!BindingModule.cache['toDash' + name]) {
						   BindingModule.cache['toDash' + name] = Utilities.Core.toDash(name);
					   }

					   const attributeName = BindingModule.cache['toDash' + name];
					   const propertyName = Utilities.Core.toCamelCase(attributeName);

					   if (node._properties && node._properties[propertyName]) {
						   node._properties[propertyName].notify = true;
					   }

					   that.ownerElement['$' + node.getAttribute('smart-id')].listen(attributeName + '-changed', function (event) {
						   const detail = event.detail;

						   updateToken(detail.value);

						   const context = that.ownerElement.context;

						   if (event.context !== document) {
							   that.ownerElement.context = that.ownerElement;
						   }

						   that.updateBoundProperty(name, boundProperty);

						   that.ownerElement.context = context;
					   });
				   }
			   }*/

			boundProperty.name = attributeName;
			lastIndex = endIndex + 2;
		}

		const propertyName = boundProperty.name;
		const elementProperty = that.ownerElement ? that.ownerElement._properties[propertyName] : null;

		boundProperty.twoWay = twoWay;
		boundProperty.ready = false;

		if (that.ownerElement) {
			if (propertyName.indexOf('::') >= 0) {
				that.ownerElement.boundProperties[propertyName.substring(0, propertyName.indexOf('::'))] = true;
			}
			else {
				that.ownerElement.boundProperties[propertyName] = true;
			}
		}

		if (elementProperty) {
			boundProperty.type = elementProperty.type;
			boundProperty.reflectToAttribute = elementProperty.reflectToAttribute;
		}
		else {
			const booleans = ['checked', 'selected', 'async', 'autofocus', 'autoplay', 'controls', 'defer', 'disabled', 'hidden', 'ismap', 'loop', 'multiple', 'open', 'readonly', 'required', 'scoped'];
			if (booleans.indexOf(elementAttributeName) >= 0) {
				boundProperty.type = 'boolean';
			}
			else {
				boundProperty.type = 'string';
			}

			boundProperty.reflectToAttribute = true;
		}

		return boundProperty;
	}

	/**
	 * Updates element's data bound nodes.
	 */
	updateTextNodes() {
		const that = this;

		that.updateTextNode(that.ownerElement.shadowRoot || that.ownerElement, that.ownerElement.bindings, that.ownerElement);
	}

	/**
	 * Updates a data bound node.
	 * @param {Node} - The bound node.
	 * @param {Array<BindingData>} - The node's binding data.
	 * @param {Element} - The element to be updated.
	 */
	updateTextNode(node, bindings, element) {
		const that = this;

		if (!bindings) {
			return;
		}

		let index = 0;
		for (let child = node.firstChild; child; child = child.nextSibling) {
			if (!bindings.children) {
				break;
			}

			that.updateTextNode(child, bindings.children[index++], element);
		}

		if (!bindings || !bindings.data) {
			return;
		}

		for (let name in bindings.data) {
			const boundProperty = bindings.data[name];
			const boundPropertyName = boundProperty.name;

			if (name !== 'textContent' || !boundProperty.twoWay || boundProperty.updating || boundProperty.value === undefined) {
				continue;
			}

			element[boundPropertyName] = boundProperty.value;
		}
	}

	/**
	 * Updates a data bound property.
	 * @param {String} - The propery's name.
	 * @param {Object} - The property's value.
	 */
	updateBoundProperty(propertyName, propertyConfig) {
		if (propertyConfig.updating) {
			return;
		}

		const that = this;
		const element = that.ownerElement;

		propertyConfig.updating = true;
		element[propertyName] = propertyConfig.value;
		propertyConfig.updating = false;
	}

	/**
	 * Updates element's data bound nodes.
	 */
	updateBoundNodes(propertyName) {
		const that = this;

		that.updateBoundNode(that.ownerElement.shadowRoot || that.ownerElement, that.ownerElement.bindings, that.ownerElement, propertyName);
		if (that.ownerElement.detachedChildren.length > 0) {
			for (let i = 0; i < that.ownerElement.detachedChildren.length; i++) {
				const node = that.ownerElement.detachedChildren[i];
				const smartId = node.getAttribute('smart-id');

				const getBindings = function (bindings) {
					if (bindings.nodeId === smartId) {
						return bindings;
					}

					for (let index in bindings.children) {
						const node = bindings.children[index];
						const attribute = node.getAttribute ? node.getAttribute('smart-id') : '';

						if (attribute === smartId) {
							return bindings;
						}

						if (node.children) {
							const result = getBindings(node);
							if (result) {
								return result;
							}
						}
					}

					return null;
				}

				const bindings = getBindings(that.ownerElement.bindings);

				if (bindings) {
					that.updateBoundNode(node, bindings, that.ownerElement, propertyName, true);
				}
				else {
					if (node.getAttribute && that.ownerElement.bindings.mapping) {
						const element = that.ownerElement;
						const bindings = that.ownerElement.bindings;

						if (bindings) {
							for (let mapping in bindings.mapping) {
								const childNode = element.querySelector('[smart-id="' + mapping + '"]');

								if (childNode) {
									const dataBoundProperties = bindings.mapping[mapping];

									that.updateBoundData(childNode, dataBoundProperties, element, propertyName);
								}
							}
						}
					}
				}
			}
		}
	}

	updateBoundMappedNodes() {
		const that = this;
		//const node = that.ownerElement.shadowRoot || that.ownerElement;
		const bindings = that.ownerElement.bindings;
		const element = that.ownerElement;

		if (!bindings.mapping) {
			return;
		}

		for (let mapping in bindings.mapping) {
			let childNode = element.querySelector('[smart-id="' + mapping + '"]');

			if (element.shadowRoot) {
				childNode = element.querySelector('[id="' + mapping + '"]');

				if (!childNode) {
					childNode = element.shadowRoot.querySelector('[id="' + mapping + '"]') || element.shadowRoot.querySelector('[smart-id="' + mapping + '"]');
				}
			}

			if (childNode) {
				const dataBoundProperties = bindings.mapping[mapping];

				that.updateBoundData(childNode, dataBoundProperties, element);
			}
			else if (element.getAttribute('aria-controls')) {
				let detachedChildNode = document.getElementById(element.getAttribute('aria-controls'));

				if (!detachedChildNode && element.shadowRoot) {
					detachedChildNode = element.shadowRoot.getElementById(element.getAttribute('aria-controls'));
				}

				childNode = detachedChildNode.querySelector('[smart-id="' + mapping + '"]');

				if (childNode) {
					const dataBoundProperties = bindings.mapping[mapping];

					that.updateBoundData(childNode, dataBoundProperties, element);
				}
			}
		}
	}

	/**
	 * Updates a data bound node.
	 * @param {Node} - The bound node.
	 * @param {Array<BindingData>} - The node's binding data.
	 * @param {Element} - The element to be updated.
	 */
	updateBoundNode(node, bindings, element, propertyName, detached) {
		const that = this;

		if (!bindings) {
			return;
		}

		/*
		if (node.getAttribute && bindings.mapping) {
			for (let mapping in bindings.mapping) {
				const childNode = element.querySelector('[smart-id="' + mapping + '"]');

				if (childNode) {
					const dataBoundProperties = bindings.mapping[mapping];

					that.updateBoundData(childNode, dataBoundProperties, element, null);
				}
			}
			return;
		}
		*/

		let index = 0;
		if (!detached) {
			for (let child = node.firstChild; child; child = child.nextSibling) {
				if (!bindings.children) {
					break;
				}
				//       that.updateBoundNode(child, bindings.children[index++], element, propertyName);

				if (child.getAttribute) {
					const childId = child.getAttribute('smart-id');
					const childBindings = function () {
						for (let binding in bindings.children) {
							if (bindings.children[binding].nodeId === childId) {
								return bindings.children[binding];
							}
						}
					}();

					that.updateBoundNode(child, childBindings, element, propertyName);
					index++;
				}
				else {
					that.updateBoundNode(child, bindings.children[index++], element, propertyName);
				}
			}
		}
		else if (detached && !bindings.data) {
			for (let child = node.firstChild; child; child = child.nextSibling) {
				if (!bindings.children) {
					break;
				}

				//   that.updateBoundNode(child, bindings.children[index++], element, propertyName, detached);

				if (child.getAttribute) {
					const childId = child.getAttribute('smart-id');
					const childBindings = function () {
						for (let binding in bindings.children) {
							if (bindings.children[binding].nodeId === childId) {
								return bindings.children[binding];
							}
						}
					}();

					that.updateBoundNode(child, childBindings, element, propertyName);
					index++;
				}
				else {
					that.updateBoundNode(child, bindings.children[index++], element, propertyName, detached);
				}
			}
		}

		if (!bindings || !bindings.data) {
			return;
		}

		const dataBoundProperties = bindings.data;

		that.updateBoundData(node, dataBoundProperties, element, propertyName);
	}

	updateBoundData(node, dataBoundProperties, element, propertyName) {
		const that = this;

		for (let name in dataBoundProperties) {
			const boundProperty = dataBoundProperties[name];
			let boundPropertyName = boundProperty.name;

			if (boundProperty.updating) {
				continue;
			}

			if (boundPropertyName.indexOf('::') >= 0) {
				boundPropertyName = boundPropertyName.substring(0, boundPropertyName.indexOf('::'));
			}

			if (propertyName !== undefined && propertyName !== boundPropertyName) {
				continue;
			}

			if (boundPropertyName.indexOf('(') >= 0) {
				let args = boundPropertyName.substring(boundPropertyName.indexOf('('));

				const methodName = boundPropertyName.substring(0, boundPropertyName.indexOf('('));

				args = args.substring(1, args.length - 1);
				args = args.replace(/ /ig, '');
				args = args.split(',');
				if (args.length > 0 && args[0] !== '') {
					let values = [];
					for (let i = 0; i < args.length; i++) {
						values.push(element[args[i]]);
					}

					boundProperty.value = element[methodName].apply(element, values);
				}
				else {
					boundProperty.value = element[methodName]();
				}

				boundProperty.type = typeof boundProperty.value;
			}
			else {
				boundProperty.value = element[boundPropertyName];
			}

			if (boundPropertyName === 'innerHTML') {
				if (node[name].toString().trim() !== element[boundPropertyName].toString().trim()) {
					if (boundProperty.ready) {
						node[name] = boundProperty.value.toString().trim();
					}
					else if (element._properties[boundPropertyName].defaultValue !== boundProperty.value) {
						node[name] = boundProperty.value.toString().trim();
					}
				}
			}
			else {
				if (boundProperty.not) {
					node[name] = !boundProperty.value;

					if (boundProperty.targetPropertyName) {
						node[boundProperty.targetPropertyName] = !boundProperty.value;
					}
				}
				else {
					node[name] = boundProperty.value;

					if (boundProperty.targetPropertyName) {
						node[boundProperty.targetPropertyName] = boundProperty.value;
					}
				}
			}

			if (node.$ && node.$.isNativeElement) {
				if (!BindingModule.cache['toDash' + name]) {
					BindingModule.cache['toDash' + name] = window[namespace].Utilities.Core.toDash(name);
				}

				const attributeName = BindingModule.cache['toDash' + name];
				const oldValue = node.$.getAttributeValue(attributeName, boundProperty.type);
				if (boundProperty.reflectToAttribute && (oldValue !== boundProperty.value || !boundProperty.ready)) {
					node.$.setAttributeValue(attributeName, boundProperty.value, boundProperty.type);
				}
				if (!boundProperty.reflectToAttribute) {
					node.$.setAttributeValue(attributeName, null, boundProperty.type);
				}
			}

			if (!boundProperty.ready) {
				if (node.$ && node.$.isCustomElement) {
					if (!BindingModule.cache['toDash' + name]) {
						BindingModule.cache['toDash' + name] = window[namespace].Utilities.Core.toDash(name);
					}

					const attributeName = BindingModule.cache['toDash' + name];

					if (!node._properties) {
						node._beforeCreatedProperties = node._properties = node.propertyByAttributeName = [];
					}

					if (!node._properties[name]) {
						node._properties[name] = {
							attributeName: attributeName
						}

						if (node._beforeCreatedProperties) {
							node._beforeCreatedProperties[name] = node._properties[name];
						}

						node.propertyByAttributeName[attributeName] = node._properties[name];
					}

					const propertyConfig = node._properties[name];

					propertyConfig.isUpdating = true;

					if (boundProperty.reflectToAttribute) {
						if (boundProperty.not) {
							node.$.setAttributeValue(propertyConfig.attributeName, !boundProperty.value, boundProperty.type);
						}
						else {
							node.$.setAttributeValue(propertyConfig.attributeName, boundProperty.value, boundProperty.type);
						}
					}

					if (!boundProperty.reflectToAttribute) {
						node.$.setAttributeValue(propertyConfig.attributeName, null, boundProperty.type);
					}

					propertyConfig.isUpdating = false;
				}

				if (boundProperty.twoWay) {
					const updateToken = function (value) {
						boundProperty.value = value;

						if (node.$ && node.$.isNativeElement) {
							if (!BindingModule.cache['toDash' + name]) {
								BindingModule.cache['toDash' + name] = window[namespace].Utilities.Core.toDash(name);
							}

							const attributeName = BindingModule.cache['toDash' + name];
							const oldValue = node.$.getAttributeValue(attributeName, boundProperty.type);

							if (boundProperty.reflectToAttribute && oldValue !== boundProperty.value) {
								node.$.setAttributeValue(attributeName, boundProperty.value, boundProperty.type);
							}
							if (!boundProperty.reflectToAttribute) {
								node.$.setAttributeValue(attributeName, null, boundProperty.type);
							}
						}
					}

					if (boundProperty.name.indexOf('::') >= 0) {
						const eventIndex = boundProperty.name.indexOf('::');
						const eventName = boundProperty.name.substring(eventIndex + 2);

						that.ownerElement['$' + node.getAttribute('smart-id')].listen(eventName, function () {
							updateToken(node[name]);

							const boundPropertyName = boundProperty.name.substring(0, boundProperty.name.indexOf('::'));

							that.updateBoundProperty(boundPropertyName, boundProperty);
						});
					}

					if (node.$ && node.$.isCustomElement) {
						if (node._properties[name]) {
							node._properties[name].notify = true;
						}

						if (!BindingModule.cache['toDash' + name]) {
							BindingModule.cache['toDash' + name] = window[namespace].Utilities.Core.toDash(name);
						}

						const attributeName = BindingModule.cache['toDash' + name];

						that.ownerElement['$' + node.getAttribute('smart-id')].listen(attributeName + '-changed', function (event) {
							let detail = event.detail;
							updateToken(detail.value);

							const context = that.ownerElement.context;

							if (event.context !== document) {
								that.ownerElement.context = that.ownerElement;
							}

							that.updateBoundProperty(boundProperty.name, boundProperty);

							//    that.updateBoundProperty(name, boundProperty);

							that.ownerElement.context = context;
						});
					}
				}
			}

			boundProperty.ready = true;
		}

	}
	static clearCache() {
		const that = this;

		that.cache = {
		};
	}
}

BindingModule.cache = {
};

export class App {
	constructor(object) {
		const that = this;

		that._id = object.id;

		if (object.id) {
			that._appRoot = document.getElementById(that._id);
		}
		else {
			that._id = window[namespace].Utilities.Core.createGUID();
		}

		if (object.selector) {
			that._id = window[namespace].Utilities.Core.createGUID();
			that._appRoot = document.querySelector(object.selector);
		}

		if (!that._appRoot) {
			that._appRoot = document.body;
		}

		that._appRoot.classList.add('smart-visibility-hidden');

		const componentsSettings = {
		};

		if (object.render) {
			const template = object.render();
			const components = object.components;

			const prepareDOM = function () {
				const fragment = document.createDocumentFragment();

				const templateDoc = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
				const templateBody = document.createElementNS('http://www.w3.org/1999/xhtml', 'body');
				const root = document.createElement('div');

				templateDoc.documentElement.appendChild(templateBody);

				templateBody.appendChild(root);
				root.innerHTML = template;

				for (let i = 0; i < components.length; i++) {
					const component = components[i];
					const name = component.name;
					const tagName = window[namespace].Utilities.Core.toDash(name);
					const elements = templateDoc.querySelectorAll(name);

					component.tagName = tagName;

					for (let j = 0; j < elements.length; j++) {
						const element = elements[j];

						const id = element.getAttribute('id') || window[namespace].Utilities.Core.createGUID();
						const hostElement = document.createElement('div');

						hostElement.id = id;

						root.insertBefore(hostElement, element);
						componentsSettings['#' + id] = {
							name: name, properties: [], rendered: false
						};
						element.parentNode.removeChild(element);
					}
				}

				fragment.appendChild(root);

				const appRoot = document.querySelector(object.selector);

				if (appRoot) {
					appRoot.appendChild(fragment);
				}
			}

			prepareDOM();
		}


		that._template = object.template || {
		};
		that._data = object.data || {
		};

		that._components = componentsSettings;

		const init = function () {
			that._addAttributeBindings();
			that._renderForBindings();
			that._addModelBindings();
			that._observeData();
			that.render();

			that._appRoot.classList.remove('smart-visibility-hidden');
		}

		document.readyState === 'complete' ? init() : window.addEventListener('load', init);
	}

	_addAttributeBindings(ownerElement, ownerPropertyName) {
		const that = this;
		const bindingModule = new BindingModule();
		const bindings = ownerElement ? bindingModule.getBindings(ownerElement) : bindingModule.getBindings(that._appRoot);

		if (!ownerPropertyName) {
			ownerPropertyName = '';
		}

		const createId = function () {
			return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		const traverseBindings = function (bindings) {
			const addChildBinding = function (child) {
				if (child.data) {
					let id = child.node.id;

					if (!id) {
						child.node.id = id = 'id' + createId();
					}

					for (let dataItem in child.data) {
						const dataItemValue = child.data[dataItem];

						if (dataItem === 'textContent') {
							if (child.node.parentNode.id) {
								id = child.node.parentNode.id;
							}
							else {
								child.node.id = '';
								child.node.parentNode.id = id;
							}
						}

						if (dataItemValue.isEvent) {
							const listener = {
							};

							listener[dataItemValue.name] = dataItemValue.value;

							that._addListenerBinding(id, listener);
						}
						else {
							const binding = {
							};

							binding[dataItem] = ownerPropertyName + dataItemValue.name;

							that._addTemplateBinding(id, binding);
						}
					}
				}
			}

			addChildBinding(bindings);
			for (let index in bindings.children) {
				const child = bindings.children[index];

				if (child.node && child.node.getAttribute && child.node.getAttribute('smart-for') && child.node.getAttribute('smart-for-rendered') === null) {
					continue;
				}

				addChildBinding(child);

				if (child.children) {
					traverseBindings(child);
				}
			}
		}

		traverseBindings(bindings);
	}

	get template() {
		return this._template;
	}

	set template(value) {
		this._template = value;
		this.render();
	}

	get id() {
		return this._id;
	}

	set id(value) {
		this._id = value;
	}

	get jsonData() {
		const that = this;

		return that.toJSON();
	}

	get formData() {
		const that = this;

		const formData = new FormData();
		const data = that.toJSON();

		if (!data) {
			return formData;
		}

		//let path = '';

		const traverseTree = function (data, path) {
			for (let name in data) {
				const value = data[name];

				if (window[namespace].Utilities.Types.isFunction(value)) {
					continue;
				}
				else if (typeof value === 'object' && !Array.isArray(value)) {
					traverseTree(value, name);
				}

				if (typeof value !== 'object' || Array.isArray(value)) {
					if (path === '') {
						formData.append(name, value)
					}
					else {
						formData.append(path + '.' + name, value)
					}
				}
			}
		}

		traverseTree(data, '');

		return formData;
	}

	toJSON() {
		const that = this;

		const processData = function (ownerData, targetData/*, path*/) {
			for (let dataItem in ownerData) {
				if (dataItem.startsWith('_') || dataItem === 'notifyFn' || dataItem === 'canNotify' || dataItem === 'name') {
					continue;
				}

				if (dataItem === 'propertyName' || dataItem === 'toString' || dataItem === 'propertyIsEnumerable' || dataItem === 'valueOf' || dataItem === 'toLocaleString') {
					continue;
				}

				if (dataItem === 'hasOwnProperty' || dataItem === 'isPrototypeOf') {
					continue;
				}

				const item = ownerData[dataItem];

				if (item.name === 'observableArray') {
					targetData[dataItem] = item.toArray();
					continue;
				}

				if (item.name === 'observable') {
					const subItem = {
					};

					for (let subDataItem in item) {
						if (subDataItem.startsWith('_') || subDataItem === 'propertyIsEnumerable' || subDataItem === 'notifyFn' || subDataItem === 'canNotify' || subDataItem === 'name') {
							continue;
						}

						if (subDataItem.startsWith('_') || subDataItem === 'notifyFn' || subDataItem === 'canNotify' || subDataItem === 'name') {
							continue;
						}

						if (subDataItem === 'propertyName' || subDataItem === 'toString' || subDataItem === 'valueOf' || subDataItem === 'toLocaleString') {
							continue;
						}

						if (subDataItem === 'hasOwnProperty' || subDataItem === 'isPrototypeOf') {
							continue;
						}


						if (typeof item === 'object' && typeof item[subDataItem] === 'object' && !window[namespace].Utilities.Types.isFunction(item)) {
							const subData = processData(item[subDataItem], {}, dataItem + '.' + subDataItem);

							subItem[subDataItem] = subData;

							continue;
						}

						subItem[subDataItem] = item[subDataItem];
					}

					targetData[dataItem] = subItem;
					continue;
				}

				if (typeof item === 'object' && !window[namespace].Utilities.Types.isFunction(item)) {
					const subData = processData(item, {}, dataItem);


					targetData[dataItem] = subData;
					continue;
				}

				targetData[dataItem] = item;
			}

			return targetData;
		}

		const data = processData(that._data, {
		}, '');

		return data;
	}

	get data() {
		const that = this;

		if (!that._data) {
			that._data = {
			};
		}

		return that._data;
	}
	set data(value) {
		const that = this;

		that._data = value;
		that._observeData();
		that.render();
	}

	_addTemplateBinding(id, bind) {
		const that = this;

		if (that.template['#' + id]) {
			if (!that.template['#' + id].bind) {
				that.template['#' + id].bind = bind;
			}
			else {
				Object.assign(that.template['#' + id].bind, bind);
			}
		}
		else {
			that.template['#' + id] = {
				bind: bind
			}
		}
	}

	_addListenerBinding(id, listener) {
		const that = this;

		if (that.template['#' + id]) {
			if (!that.template['#' + id].listeners) {
				that.template['#' + id].listeners = listener;
			}
			else {
				Object.assign(that.template['#' + id].listeners, listener);
			}
		}
		else {
			that.template['#' + id] = {
				listeners: listener
			}
		}
	}

	_updateDataFromBooleanElement(element, bind) {
		const that = this;

		const boundPropertyName = bind['checked'];
		const bindItem = that._data[boundPropertyName];

		if (element.value && element.value !== 'on') {
			if (Array.isArray(bindItem) || bindItem.name === 'observableArray') {
				if (element.checked) {
					bindItem.push(element.value);
				}
				else {
					const removeIndex = bindItem.indexOf(element.value);

					if (removeIndex >= 0) {
						bindItem.splice(removeIndex, 1);
					}
				}
			}
			else {
				if (element.type !== 'radio') {
					if (element.checked) {
						that._data[boundPropertyName] = element.value;
					}
					else {
						that._data[boundPropertyName] = '';
					}
				}
				else if (element.checked) {
					that._data[boundPropertyName] = element.value;
				}
			}
		}
		else {
			that._data[boundPropertyName] = element.checked;
		}
	}

	_updateDataFromNativeElement(element, bind) {
		const that = this;

		if (element.tagName === 'SELECT') {
			element.addEventListener('change', function () {
				const boundPropertyName = bind['value'];
				let dataItem = that._data[boundPropertyName];

				element.__updating = true;

				if (Array.isArray(dataItem) || dataItem.name === 'observableArray') {
					dataItem = new window.Smart.ObservableArray();

					if (element.selectedOptions) {
						for (let i = 0; i < element.selectedOptions.length; i++) {
							const option = element.selectedOptions[i];

							dataItem.push(option.value);
						}
					}

					that._data[boundPropertyName] = dataItem;
				}
				else {
					that._data[boundPropertyName] = element.value;
				}

				element.__updating = false;
			});
		}

		if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
			element.addEventListener('change', function () {
				element.__updating = true;

				if (isBoolean) {
					that._updateDataFromBooleanElement(element, bind);
				}
				else {
					that._data['value'] = element.value;
				}

				element.__updating = false;
			});


			let isBoolean = (element.type === 'checkbox' || element.type === 'radio');

			if (!isBoolean) {
				element.addEventListener('keyup', function () {
					const boundPropertyName = bind['value'];

					that._data[boundPropertyName] = element.value;
				});
			}
		}
	}

	_addModelBindings(ownerElement) {
		const that = this;

		const elements = ownerElement ? ownerElement.querySelectorAll('[smart-model]') : that._appRoot.querySelectorAll('[smart-model]');

		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			let bind = {
				value: element.getAttribute('smart-model')
			};

			if (element.type === 'list') {
				bind = {
					selectedValues: element.getAttribute('smart-model')
				};
			}

			if (element.type === 'checkbox' || element.type === 'radio') {
				bind = {
					checked: element.getAttribute('smart-model')
				};
			}

			if (!element.id) {
				element.id = 'id' + window[namespace].Utilities.Core.createGUID().replace(/-/ig, '');
			}


			that._updateDataFromNativeElement(element, bind);
			that._addTemplateBinding(element.id, bind);
		}
	}

	_renderForBindings(invokeRender) {
		const that = this;

		const elements = that._appRoot.querySelectorAll('[smart-for]');

		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			const dataName = element.getAttribute('smart-for');
			const array = that._data[dataName];

			if (!element.id) {
				element.id = 'id' + window[namespace].Utilities.Core.createGUID().replace(/-/ig, '');
			}

			element.setAttribute('smart-for-rendered', '');

			const selfRepeat = element.getAttribute('smart-for-self') !== null;
			const toRemove = !selfRepeat ? element.querySelectorAll('.smart-for-item-' + element.id) : element.parentNode.querySelectorAll('.smart-for-item-' + element.id);

			for (let r = 0; r < toRemove.length; r++) {
				if (that.template[toRemove[r].id]) {
					delete that.template[toRemove[r].id];
				}

				toRemove[r].remove();
			}

			const node = selfRepeat ? element : element.firstElementChild;
			const fragment = document.createDocumentFragment();

			for (let j = 0; j < array.length; j++) {
				const clonedNode = node.cloneNode(true);

				clonedNode.style.display = '';

				clonedNode.id = element.id + '_' + j;
				clonedNode.classList.add('smart-for-item');
				clonedNode.classList.add('smart-for-item-' + element.id);

				clonedNode.removeAttribute('smart-for');
				fragment.appendChild(clonedNode);
			}

			node.style.display = 'none';

			if (!selfRepeat) {
				element.appendChild(fragment);
			}
			else {
				element.parentNode.insertBefore(fragment, element.nextSibling);
			}

			let children = that._appRoot.querySelectorAll('.smart-for-item-' + element.id);

			for (let j = 0; j < children.length; j++) {
				const childNode = children[j];

				that._addAttributeBindings(childNode, dataName + '.' + j + '.');
			}
		}

		if (invokeRender && elements.length > 0) {
			that.render();
		}
	}

	notify(notifyFn) {
		const that = this;

		that.notifyFn = function (changes) {
			changes.owner = that;

			notifyFn(changes);
		}
	}

	_notify(changes) {
		const that = this;

		if (changes.propertyName === 'length') {
			return;
		}

		if (that.notifyFn) {
			that.notifyFn(changes);
		}

		let dataPropertyName = changes.propertyName;
		if (changes.object) {
			dataPropertyName = changes.object.propertyName;
		}

		for (let selector in that.template) {
			const item = that.template[selector];

			let elementProperty = null;

			for (let property in item.bind) {
				if (typeof item.bind[property] === 'function') {
					continue;
				}

				if (item.bind[property].indexOf(dataPropertyName) >= 0) {
					elementProperty = property;
					break;
				}
			}

			if (!elementProperty) {
				continue;
			}

			that._setPropertyFromData(item, elementProperty);
		}

		that._renderForBindings(true);
	}

	_observeData() {
		const that = this;

		that._data = new window[namespace].Observable(that._data);
		that._data.canNotify = false;
		that._data.notify(that._notify.bind(that));

		const observeSubData = function (data) {
			data.canNotify = false;

			for (let dataItem in data) {
				if (typeof data[dataItem] === 'function') {
					data[dataItem] = data[dataItem].bind(data);
					continue;
				}

				if (dataItem.startsWith('_') || dataItem === 'notifyFn' || dataItem === 'canNotify' || dataItem === 'name') {
					continue;
				}

				const dataItemValue = data[dataItem];

				if (Array.isArray(dataItemValue)) {
					data[dataItem] = new window[namespace].ObservableArray(data[dataItem]);
					data[dataItem].canNotify = false;
					data[dataItem].notify(that._notify.bind(that));
					data[dataItem].canNotify = true;
					data[dataItem].propertyName = dataItem;
				}
				else if (dataItemValue && typeof dataItemValue === 'object' && dataItemValue.constructor === window[namespace].DataAdapter) {
					data[dataItem].propertyName = dataItem;
				}
				else if (dataItemValue && typeof dataItemValue === 'object' && dataItemValue instanceof Date) {
					data[dataItem].propertyName = dataItem;
				}
				else if (dataItemValue && typeof dataItemValue === 'object') {
					data[dataItem] = new window[namespace].Observable(data[dataItem]);
					data[dataItem].canNotify = false;
					data[dataItem].notify(that._notify.bind(that));
					data[dataItem].canNotify = true;
					data[dataItem].propertyName = dataItem;

					observeSubData(data[dataItem]);
				}
			}

			data.canNotify = true;
		}

		for (let dataItem in that._data) {
			if (typeof that._data[dataItem] === 'function') {
				that._data[dataItem] = that._data[dataItem].bind(that._data);
				continue;
			}

			if (dataItem.startsWith('_') || dataItem === 'notifyFn' || dataItem === 'canNotify' || dataItem === 'name') {
				continue;
			}

			const dataItemValue = that._data[dataItem];

			if (Array.isArray(dataItemValue)) {
				that._data[dataItem] = new window[namespace].ObservableArray(that._data[dataItem]);
				that._data[dataItem].canNotify = false;
				that._data[dataItem].notify(that._notify.bind(that));
				that._data[dataItem].canNotify = true;
				that._data[dataItem].propertyName = dataItem;
			}
			else if (typeof dataItemValue === 'object' && dataItemValue.constructor === window[namespace].DataAdapter) {
				that._data[dataItem].propertyName = dataItem;
			}
			else if (typeof dataItemValue === 'object' && dataItemValue instanceof Date) {
				that._data[dataItem].propertyName = dataItem;
			}
			else if (typeof dataItemValue === 'object') {
				that._data[dataItem] = new window[namespace].Observable(that._data[dataItem]);
				that._data[dataItem].canNotify = false;
				that._data[dataItem].notify(that._notify.bind(that));
				that._data[dataItem].canNotify = true;
				that._data[dataItem].propertyName = dataItem;

				observeSubData(that._data[dataItem]);
			}
		}

		that._data.canNotify = true;
	}

	_setPropertyFromData(item, propertyName) {
		const that = this;

		if (item.element.__updating || !item.bind) {
			return;
		}

		const boundPropertyName = item.bind[propertyName];

		if (typeof boundPropertyName === 'function') {
			return;
		}

		const boundArray = boundPropertyName ? boundPropertyName.split('.') : [];

		let dataItem = that._data;

		for (let i = 0; i < boundArray.length; i++) {
			const name = boundArray[i];

			if (typeof dataItem === 'string') {
				break;
			}

			if (undefined === dataItem[name]) {
				dataItem = undefined;
				break;
			}

			dataItem = dataItem[name];
		}

		if (item.bind.computed) {
			const computedObject = {
				item: item, name: boundPropertyName, value: dataItem
			};

			item.bind.computed(computedObject);

			if (computedObject.value !== dataItem) {
				dataItem = computedObject.value;
			}
		}

		item.element.__updatingProperties = true;
		if (boundPropertyName && dataItem !== undefined) {
			if (dataItem.name === 'observableArray') {
				if (item.element.type === 'checkbox') {
					item.element[propertyName] = dataItem.indexOf(item.element.value) >= 0;
				}
				else {
					item.element[propertyName] = dataItem.toArray().slice(0);
				}
			}
			else if (dataItem.name === 'observable') {
				const findInSubData = function (data) {
					let foundData = null;

					for (let dataItem in data) {
						if (typeof data[dataItem] === 'function') {
							continue;
						}

						if (dataItem.startsWith('_') || dataItem === 'notifyFn' || dataItem === 'canNotify' || dataItem === 'name') {
							continue;
						}

						const dataItemValue = data[dataItem];

						if (dataItemValue === undefined) {
							continue;
						}

						if (dataItemValue && Array.isArray(dataItemValue)) {
							continue;
						}
						else if (dataItemValue && typeof dataItemValue === 'object' && dataItemValue.constructor === window[namespace].DataAdapter) {
							continue;
						}
						else if (dataItemValue && typeof dataItemValue === 'object') {
							foundData = findInSubData(data[dataItem]);
						}

						if (dataItem === boundPropertyName) {
							foundData = dataItemValue;
							break;
						}

						if (foundData) {
							return foundData;
						}
					}

					return foundData;
				}

				const subData = findInSubData(dataItem);
				if (subData) {
					item.element[propertyName] = subData;
				}
				else {
					item.element[propertyName] = dataItem;
				}
			}
			else if (item.element.type === 'radio') {
				if (item.element.value === dataItem) {
					item.element[propertyName] = true;
				}
				else {
					item.element[propertyName] = false;
				}
			}
			else {
				item.element[propertyName] = dataItem;
			}

			if (that._components[item.selector] && !that._components[item.selector].rendered) {
				that._components[item.selector].properties[propertyName] = dataItem;
			}
		}
		else if (item.properties) {
			item.element[propertyName] = item.properties[propertyName];

			if (that._components[item.selector] && !that._components[item.selector].rendered) {
				that._components[item.selector].properties[propertyName] = item.properties[propertyName];
			}
		}

		item.element.__updatingProperties = false;
	}

	render() {
		const that = this;

		for (let selector in that.template) {
			const item = that.template[selector];
			const element = item.element ? item.element : document.querySelector(selector);
			const properties = item.properties;
			const listeners = item.listeners;
			const bind = item.bind;

			if (!element) {
				continue;
			}

			item.selector = selector;
			item.element = element;

			if (!element._properties) {
				element._properties = [];
			}

			for (let propertyName in properties) {
				const property = element._properties ? element._properties[propertyName] : null;

				if (property) {
					property.notify = true;
				}

				that._setPropertyFromData(item, propertyName);
			}

			for (let propertyName in bind) {
				const property = element._properties ? element._properties[propertyName] : null;

				if (property) {
					property.notify = true;
				}

				that._setPropertyFromData(item, propertyName);
			}

			if (that._components && that._components[selector] && that._components[selector].rendered === false) {
				const component = that._components[selector];

				item.element = component.instance = new window[component.name](selector, component.properties);

				component.rendered = true;
			}

			const handleListeners = function (type) {
				const element = item.element;

				for (let listenerName in listeners) {
					if (!element.$) {
						element.$ = window[namespace].Utilities.Extend(element);
					}

					element.$[type](listenerName, function (event) {
						const dataHandlerName = listeners[listenerName]

						if (dataHandlerName.indexOf('.') >= 0) {
							const path = dataHandlerName.split('.');
							let eventHandler = that._data[path[0]];

							for (let i = 1; i < path.length; i++) {
								eventHandler = eventHandler[path[i]];
							}

							if (eventHandler !== undefined) {
								eventHandler(event);
							}
						}
						else {
							if (that._data[dataHandlerName]) {
								that._data[dataHandlerName](event);
							}
						}
					});
				}

				for (let propertyName in bind) {
					const property = element._properties ? element._properties[propertyName] : null;

					if (property) {
						const eventHandler = function (event) {
							if (element.__updatingProperties) {
								return;
							}

							element.__updating = true;

							const toggleRadioButtonUpdates = function (update) {
								if (element.type === 'radio') {
									const radioButtons = element.parentNode.querySelectorAll('[type="radio"]');

									for (let i = 0; i < radioButtons.length; i++) {
										radioButtons[i].__updating = update;
									}
								}
							}

							toggleRadioButtonUpdates(true);

							const boundPropertyName = bind[propertyName];

							if (element.type === 'radio' || element.type === 'toggle' || element.type === 'checkbox') {
								that._updateDataFromBooleanElement(element, bind);
							}
							else {
								const setValue = function (obj, path, value) {
									var i;
									for (i = 0; i < path.length - 1; i++) {
										obj = obj[path[i]];
									}
									obj[path[i]] = value;
								}

								setValue(that._data, boundPropertyName.split('.'), event.detail.value);

							}

							element.__updating = false;
							toggleRadioButtonUpdates(false);
						}

						if (element.type === 'textarea') {
							element.$[type]('input.keyup', function (event) {
								const customEvent = new CustomEvent('keyup', {
									detail: {
										originalEvent: event, value: element.$.input.value
									}
								});

								eventHandler(customEvent);
							});
						}

						element.$[type](property.attributeName + '-changed', function (event) {
							eventHandler(event);
						});
					}
					else {
						//
					}
				}
			}


			handleListeners('unlisten');

			if (element.isAttached) {
				handleListeners('listen');
			}

			element.onAttached = function () {
				handleListeners('listen');
			}

			element.onDetached = function () {
				handleListeners('unlisten');
			}
		}

	}
}


window[namespace].App = App;
window[namespace.toLowerCase() + 'App'] = App;
window.App = App;