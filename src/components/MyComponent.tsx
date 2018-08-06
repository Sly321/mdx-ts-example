import * as React from "react"

export interface Props {
	/**
	 * Children
	 *
	 * @type {React.ReactNode}
	 * @memberof Props
	 */
	children?: React.ReactNode

	/**
	 * Dokumentation
	 *
	 * @type {string}
	 * @memberof Props
	 */
	hello?: string

	/**
	 * the id of the
	 *
	 * @type {string}
	 * @memberof Props
	 * 
	 * @example
	 * <MyComponent id="" />
	 */
	id: string

	/**
	 * a required number array, but set default by defaultProps
	 *
	 * @type {Array<number>}
	 * @memberof Props
	 */
	aNumberArray?: Array<number>
}

export interface State {
}

/**
 * Diese Komponente dient
 *
 * @export
 * @class MyComponent
 * @extends {React.Component<Props, State>}
 */
export default class MyComponent extends React.Component<Props, State> {
	static defaultProps: Partial<Props> = {
		aNumberArray: [1, 2, 3],
		hello: "true"
	}

	constructor(props: Props) {
		super(props)

		this.state = {
		}

		// Wow keine Type Checkings mehr... Lächerlich
		console.log(this.props.hello.bold())
	}

	render() {
		return (
			<div>{this.props.children}</div>
		)
	}
}