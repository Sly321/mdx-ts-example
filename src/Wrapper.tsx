import * as React from "react"
import MyComponent from "./components/MyComponent"

export interface Props {
	children?: React.ReactNode
}

export type DocGenProp = {
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
}

export type DocgenInfo = {
	/**
	 * The name of the component
	 *
	 * @type {string}
	 */
	displayName: string

	/**
	 * the description of the component
	 *
	 * @type {string}
	 */
	description: string

	props: { [key: string]: DocGenProp }
}

export default class Wrapper extends React.Component<Props> {
	constructor(props: Props) {
		super(props)

		this.state = {
		}

		console.debug((MyComponent as any).__docgenInfo)

	}


	render() {
		const info = this.docInfo
		return <React.Fragment>{Object.keys(info.props).map(key => {
			const prop = info.props[key]
			return <tr>
				<td>{prop.name}</td>
				<td>{prop.defaultValue ? prop.defaultValue.value : "no default"}</td>
				<td>{prop.type.name}</td>
			</tr>
		})}
			<MyComponent id="" />
		</React.Fragment>
	}

	private get docInfo(): DocgenInfo {
		return (MyComponent as any).__docgenInfo
	}
}