export type DocgenPropertyTypeDefaultValue = {
	/**
	 * The default value
	 *
	 * @type {string}
	 */
	value: string
}

export type DocgenPropertyTypeInfo = { name: string }

type DocgenPropertyType = {
	/**
	 * An object with the default value, when static defaultProps are given
	 *
	 * @type {{ value: string }}
	 */
	defaultValue: DocgenPropertyTypeDefaultValue | null
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
	 * The doc description of the property
	 *
	 * @type {string}
	 */
	description: string

	/**
	 * the type of the property
	 *
	 * @type {(DocgenPropertyTypeInfo | null)}
	 */
	type: DocgenPropertyTypeInfo | null

	// dont know yet
	// raw: string
}


export default DocgenPropertyType