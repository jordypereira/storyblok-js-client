/**
 * @interface ISbContentMAPI_DataSourceEntryPOST
 * @description Storyblok Content Management API Data Source Entries Interface
 * @description This is used when creating a new data source entry
 * @reference https://www.storyblok.com/docs/api/management#core-resources/datasource-entries/datasource-entries
 *
 **/
export interface ISbContentMAPI_DataSourceEntryPOST {
	datasource_entry: {
		name: string
		value: string
		datasource_id: number
	}
}

export type ISbContentMAPI_DataSourceEntryPUT =
	ISbContentMAPI_DataSourceEntryPOST & {
		dimension_id: number
		datasource_entry: {
			id: number
			dimension_value: string
		}
	}

/**
 * @interface ISbContentMAPIDataSource
 * @description Storyblok Content Management API Data Source Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/datasources/datasources
 *
 **/
export interface ISbContentMAPIDataSource {
	id: number
	name: string
	slug: string
}
