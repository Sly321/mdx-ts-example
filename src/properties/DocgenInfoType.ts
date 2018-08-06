import DocgenPropertyType from "./DocgenPropertyType"

type DocgenInfoType = {
	/**
	 * The name of the component
	 *
	 * @type {string}
	 */
	displayName: string

	/**
	 * the description of the component class
	 *
	 * @type {string}
	 */
	description: string

	props: { [key: string]: DocgenPropertyType }
}

export default DocgenInfoType