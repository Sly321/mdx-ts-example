import PropertyConverter from "../../src/properties/PropertyConverter"
import DocgenPropertyType, { DocgenPropertyTypeDefaultValue, DocgenPropertyTypeInfo } from "../../src/properties/DocgenPropertyType"
import CatalogPropertyModel from "../../src/properties/CatalogPropertyModel"

describe(`${PropertyConverter.name}`, () => {

	describe(`docToCatalogProperty(docProp: DocgenPropertyType): CatalogPropertyModel`, () => {
		let docProp: DocgenPropertyType

		// properties of docProps
		let defaultValue: DocgenPropertyTypeDefaultValue | null
		let name: string
		let required: boolean
		let type: DocgenPropertyTypeInfo | null
		let description: string

		// result
		let model: CatalogPropertyModel

		const createDocPropAndConvertModel = () => {
			docProp = {
				defaultValue,
				name,
				required,
				type,
				description
			}
			model = PropertyConverter.docToCatalogProperty(docProp)
		}

		describe(`docProp`, () => {
			describe(`defaultValue`, () => {
				describe(`null`, () => {
					beforeEach(() => {
						defaultValue = null
						createDocPropAndConvertModel()
					})

					it(`should return a model with property "default" equal to "/"`, () => {
						expect(model).toHaveProperty("default", "/")
					})
				})

				describe(`{ value: "stringvalue" }`, () => {
					beforeEach(() => {
						defaultValue = { value: "stringvalue" }
						createDocPropAndConvertModel()
					})

					it(`should return a model with property "default" equal to "stringvalue"`, () => {
						// string value should be in quotes
						expect(model).toHaveProperty("default", "\"stringvalue\"")
					})
				})

				describe(`type.name = "boolean", { value: "true" }`, () => {
					beforeEach(() => {
						defaultValue = { value: "true" }
						type = { name: "boolean" }
						createDocPropAndConvertModel()
					})

					it(`should return a model with property "default" equal to true`, () => {
						// boolean value should be without quotes, a real boolean
						expect(model).toHaveProperty("default", true)
					})
				})
			})

			describe(`type`, () => {
				describe(`name`, () => {
					describe(`"boolean"`, () => {
						beforeEach(() => {
							type = { name: "boolean" }
							createDocPropAndConvertModel()
						})

						it(`should return a model with property "type" equal to "boolean"`, () => {
							expect(model).toHaveProperty("type", "boolean")
						})
					})

					describe(`"Boolean"`, () => {
						beforeEach(() => {
							type = { name: "Boolean" }
						})

						it(`should return a model with "type" equal to "boolean"`, () => {
							expect(model).toHaveProperty("type", "boolean")
						})
					})

					describe(`"ReactText"`, () => {
						beforeEach(() => {
							type = { name: "ReactText" }
						})

						it(`should return a model with "type" equal to "number | string"`, () => {
							expect(model).toHaveProperty("type", "number | string")
						})
					})
				})
			})
		})

		afterEach(() => {
			defaultValue = undefined
			name = undefined
			required = undefined
			type = undefined
			description = undefined
		})
	})
})