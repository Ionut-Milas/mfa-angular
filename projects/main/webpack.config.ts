import {Configuration, container} from 'webpack';
import { dependencies } from '../../package.json';

export const webpackConfig: Configuration = {
	output: {
		publicPath: '/',
	},
	plugins: [
		new container.ModuleFederationPlugin({
			remotes:{},
			shared: {
				'@angular/core': {
					eager: true,
					singleton: true,
					strictVersion: true,
					requiredVersion: dependencies['@angular/core']
				},
				'@angular/common': {
					eager: true,
					singleton: true,
					strictVersion: true,
					requiredVersion: dependencies["@angular/common"]
				},
				'@angular/router': {
					eager: true,
					singleton: true,
					strictVersion: true,
					requiredVersion: dependencies["@angular/router"],
				},
				// add here shared library if you install it via package.json
				// 'shared': {
				// 	singleton: true,
				// 	eager: true,
				// 	requiredVersion: dependencies['shared']
				// }
			}
		})
	]
};
export default webpackConfig;
