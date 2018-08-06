import * as React from "react"

export enum TestEnum {
	ValA,
	ValB = "ValB",
	ValC = 1
}

export type NewTypeA = "mydefaultstring"
export type NewTypeB = "seconds"

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
	 *
	 * the id of the
	 *
	 * @type {(string | number)}
	 * @memberof Props
	 */
	id: string | number | boolean

	/**
	 * a required number array, but set default by defaultProps
	 *
	 * @type {Array<number>}
	 * @memberof Props
	 */
	aNumberArray?: Array<number>

	/**
	 *
	 *
	 * @type {TestEnum}
	 * @memberof Props
	 */
	aEnumValue?: TestEnum

	aUnionType?: NewTypeA & NewTypeB

	aOrType?: NewTypeA | NewTypeB
	aObjectType?: { [key: string]: number }
	aBooleanType?: boolean
	aBigBooleanType?: Boolean
	aBooleanTypeWithDefault?: boolean
	aNumberType?: number
	aNumberTypeWithDefault?: number
	aNumberOrStringType?: number | string
}

export interface State {
}

/**
 * Diese Komponente dient... Und soviel mehr
 *
 * @export
 * @class MyComponent
 * @extends {React.Component<Props, State>}
 * 
 * @example
 * <MyComponent id="component-id" />
 */
export default class MyComponent extends React.Component<Props, State> {
	static defaultProps: Partial<Props> = {
		aNumberArray: [1, 2, 3],
		hello: "true",
		aBooleanTypeWithDefault: true,
		aNumberTypeWithDefault: 0
	}

	constructor(props: Props) {
		super(props)

		this.state = {
		}
	}

	render() {
		return (
			<div>{this.props.children}</div>
		)
	}
}