type DocgenPropertyType = {
	/**
	 * An object with the default value, when static defaultProps are given
	 *
	 * @type {{ value: string }}
	 */
	defaultValue: {
		/**
		 * The default value
		 *
		 * @type {string}
		 */
		value: string
	}
	/**
	 * The name of the variable
	 *
	 * @type {string}
	 */
	name: string

	/**
	 * indicates if the variable is required or not
	 *
	 * @type {boolean}
	 */
	required: boolean

	/**
	 * Typestring in js syntax of the variable
	 *
	 * @type {{ name: string }}
	 */
	type: { name: string }

	// dont know yet
	raw: string
}

export default DocgenPropertyType