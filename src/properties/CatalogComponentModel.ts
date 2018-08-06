import CatalogPropertyModel from "./CatalogPropertyModel"

export default class CatalogComponentModel {
	public name: string
	public description: string
	public example: string
	public properties: Array<CatalogPropertyModel>
}