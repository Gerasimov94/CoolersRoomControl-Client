import React, {PureComponent} from 'react';
import {TextInput} from 'react-native';
import {WrappedFieldProps} from 'redux-form';

interface IReduxFormInput {
	placeholder?: string;
	style?: object | null;
	multiline?: boolean;
}

export default class ReduxFormInput extends PureComponent<WrappedFieldProps & IReduxFormInput> {
	public static readonly defaultProps = {
		placeholder: 'Type something',
		style: null,
		multiline: false,
	};

	private readonly onInputChange = (value: string) => this.props.input.onChange(value);

	public render() {
		const {
			input: {value},
			style,
			placeholder,
			multiline,
		} = this.props;

		return (
			<TextInput
				style={style}
				onChangeText={this.onInputChange}
				value={value.toString()}
				placeholder={placeholder}
				multiline={multiline}
			/>
		);
	}
}
