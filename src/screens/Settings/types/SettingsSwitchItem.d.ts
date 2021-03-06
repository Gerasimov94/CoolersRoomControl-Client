interface ISettingsSwitchItemInterface {
	type: string;
	index: number;
	switchesArrayLength: number;
	temperatureScale: string;
	changeTemperatureScale: (temperatureScale: string) => void;
}

export default ISettingsSwitchItemInterface;
