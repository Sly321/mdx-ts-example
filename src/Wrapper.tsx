import * as React from "react"
import MyComponent from "./components/MyComponent"
import DocgenInfoType from "./properties/DocgenInfoType"

export interface Props {
	children?: React.ReactNode
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
		return <React.Fragment>
			<table>
				<tbody>
					{Object.keys(info.props).map(key => {
						const prop = info.props[key]
						return <tr key={prop.name}>
							<td>{prop.name}</td>
							<td>{prop.defaultValue ? prop.defaultValue.value : "no default"}</td>
							<td>{prop.type.name}</td>
							<td>{prop.type.name.startsWith('"') ? "ENUM" : "NOENUM"}</td>
						</tr>
					})}
				</tbody>
			</table>
			<MyComponent id="" />
		</React.Fragment>
	}

	private get docInfo(): DocgenInfoType {
		return (MyComponent as any).__docgenInfo
	}
}