import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

/* tslint:disable */

interface IProps {
	fill: string;
}

const Users: React.FC<IProps> = ({fill}) => (
	<Svg width={24} height={24} viewBox='0 0 423.803 423.803'>
		<G>
			<G fill={fill}>
				<Path d='M422.951,368.901l-16.8-58.4c-0.4-1.2-1.2-2.4-2-3.2c-10.4-31.6-36-56-68.4-64.4l-4.8-0.8c-7.2-2-15.2,0.4-20.4,6.4
					c-17.6,20-40,21.6-63.6,21.6c-23.6,0-46-1.6-63.6-21.6c-5.2-6-13.2-8.4-20.4-6.4l-4.8,1.2c-24.4,6.4-45.2,22-58.4,42.8h-50.4
					c-0.4,0-0.4,0-0.8-0.4c0-0.4-0.4-0.8-0.4-1.6l10.4-37.2c9.2-29.2,26.8-38,61.2-46.8c1.6-0.4,2.8-1.2,3.6-2c2.8,2.4,6,4.4,9.2,6
					c1.2,0.8,2.4,0.8,3.6,0.8c2.8,0,5.6-1.6,7.2-4.4c2-4,0.4-8.8-3.6-10.8c-18.4-9.6-31.6-36.8-31.6-64.8c0-24.8,20.4-45.2,45.2-45.2
					c4.8,0,9.2,0.8,13.6,2c-4.4,10.8-6.8,22.4-6.8,34.8c0,68.4,41.2,126,90,126c48,0,90.4-58.8,90.4-126c0-50-40.4-90.4-90.4-90.4
					c-31.6,0-59.6,16.4-75.6,41.2c-6.8-2.4-14-3.6-21.2-3.6c-21.6,0-40.8,11.6-51.6,28.8c-0.8-0.8-1.6-1.2-2.4-1.6
					c-6-3.2-12-4.4-18.8-4.4c-22.4-0.4-40.4,17.6-40.4,40c0,12.8,3.6,24.8,9.2,34.4c-18.4,4.8-34.8,12-42.4,36.4l-6.4,23.2
					c-1.2,4-0.4,8.4,2,11.6c2.4,3.6,6.8,5.6,11.2,5.6h30.8c-0.4,1.6-1.2,3.2-1.6,4.8l-10.4,37.6c-1.6,5.2-0.4,10.8,3.2,15.2
					c3.2,4.4,8,6.8,13.6,6.8h42.4c-1.2,2.8-2,5.6-2.8,8.4l-16.8,58.8c-1.6,6.8-0.4,14,4,19.6c4.4,5.6,10.8,8.8,17.6,8.8h240h13.6h54
					c6.8,0,13.6-3.2,17.6-8.8C423.351,383.301,424.951,376.101,422.951,368.901z M184.151,82.901c0.4-0.4,0.8-0.8,1.2-1.6
					c0.4-0.4,0.4-1.2,0.8-1.6c12.4-22.4,36.4-37.6,64-37.6c33.2,0,61.2,22,70.8,52c-14,2.8-28.8-2.8-37.6-14.8
					c-2.8-3.6-7.6-4.4-11.2-1.6c-1.6,1.2-2.4,2.4-2.8,4c-0.4,0.4-0.4,0.8-0.8,1.2c-11.2,22.8-48.8,32.4-91.6,24
					C178.151,98.501,180.551,90.501,184.151,82.901z M206.551,125.701c32,0,58.4-10,72-28.8c10,8.8,22.4,13.6,35.6,13.6
					c3.2,0,6.8-0.4,10-1.2c0.4,2.4,0.4,4.4,0.4,6.8c0,58.8-34.8,110.4-74.4,110.4c-38,0-71.2-47.6-74-103.6
					C186.551,124.901,196.951,125.701,206.551,125.701z M16.951,221.701l5.6-20c4.8-16.4,14.8-21.2,34.8-26c1.2-0.4,2.4-0.8,3.2-1.6
					c2,1.6,3.6,2.8,6,4c1.2,0.8,2.4,0.8,3.6,0.8c2.8,0,5.6-1.6,7.2-4.4c2-4,0.4-8.8-3.2-10.8c-10.4-5.6-18-21.2-18-37.2
					c0-13.6,10.8-24.4,24.4-24.4c4.4,0,8,0.8,11.6,2.8c1.2,0.4,2,0.8,3.2,0.8c-2,6-3.2,12.4-3.2,19.2c0,22.8,7.6,45.2,19.6,60.8
					c-24,6-45.2,14-59.2,36H16.951z M406.551,379.301c-0.8,0.8-2.4,2.4-5.2,2.4h-54h-13.6h-240c-2.8,0-4.4-1.6-5.2-2.4
					c-1.2-1.6-1.6-4-1.2-5.6l16.8-58.4c8-27.6,30-49.2,58-56.4l4.8-1.2c1.2-0.4,3.2,0.4,4.4,1.6c22,25.2,49.2,27.2,75.6,27.2
					c26.4,0,53.6-2,75.6-27.2c1.2-1.2,2.8-2,4.8-1.6l4.8,1.2c27.6,7.2,50,28.8,58,56.4l7.2,24.8c0.4,1.2,0.8,2,1.6,2.8l8.8,30.4
					C408.151,375.301,407.751,377.701,406.551,379.301z'/>
			</G>
		</G>
	</Svg>
);

export default Users;