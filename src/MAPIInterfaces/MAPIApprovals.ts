export interface ISBContentMAPIApprovals {
	approval: {
		id?: number
		status: string
		story_id: number
		approver_id: number
	}
}

export interface ISBContentMAPIReleaseApproval extends ISBContentMAPIApprovals {
	release_id: number
}

// Aliases
export type Approval = ISBContentMAPIApprovals
export type ReleaseApproval = ISBContentMAPIReleaseApproval