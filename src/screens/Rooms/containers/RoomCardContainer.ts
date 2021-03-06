import {connect} from 'react-redux';
import RoomCardComponent from '../components/RoomCardComponent';
import {getRoomByID, getPowerAtRoom} from '../selectors/roomsSelectors';
import {getTemperatureScale} from '../../Settings/selectors/settingsSelectors';
import {changeTemperatureAtRoom, changeHumidityAtRoom} from '../actions/roomsActions';
import {NavigationComponent} from 'react-navigation';

const mapStateToProps = (state: any, {navigation}: NavigationComponent) => {
	const roomID = navigation.getParam('roomID');

	return {
		item: getRoomByID(state, roomID),
		tempScale: getTemperatureScale(state),
		powerSumAtRoom: getPowerAtRoom(state, roomID),
	};
};

export default connect(mapStateToProps, {
	changeTemperatureAtRoom,
	changeHumidityAtRoom,
})(RoomCardComponent);
