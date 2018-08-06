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
			<h2>{info.displayName}</h2>
			<p>{info.description}</p>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Default</th>
						<th>Type</th>
						<th>Required</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(info.props).map(key => {
						const prop = info.props[key]
						return <tr key={prop.name}>
							<td>{prop.name}</td>
							<td>{prop.defaultValue ? prop.defaultValue.value : "no default"}</td>
							<td>{prop.type.name}</td>
							<td>{prop.required ? "true" : "false"}</td>
							<td>{prop.description}</td>
						</tr>
					})}
				</tbody>
			</table>
		</React.Fragment>
	}

	private get docInfo(): DocgenInfoType {
		return (MyComponent as any).__docgenInfo
	}
}