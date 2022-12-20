//import { IOptions } from 'tsparticles/types/bundle';

const particleOptions = {
	fullScreen: {
		enable: true,
		zIndex: -999
	},
	background: {
		color: "#002147",
	},
	particles: {
		links: {
			distance: 150,
			enable: true,
		},
		move: {
			enable: true,
		},
		size: {
			value: 1,
		},
		shape: {
			type: "circle",
		},
	},
}

export default particleOptions;
