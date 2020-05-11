export interface PollingData {
	pollingData: [];
}

export interface PollingDataAction {
	type: string;
	data: PollingData[];
}
