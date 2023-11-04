import {Configuration, container} from 'webpack';
import { dependencies } from '../../package.json';

export const webpackConfig: Configuration = {
	output: {
		publicPath: './rentals/',
		uniqueName: 'rentals',
	},
	experiments: {
		topLevelAwait: true,
	},
	optimization: {
		runtimeChunk: false,
	},
	plugins: [
		new container.ModuleFederationPlugin({
			name: 'rentals',
			library: {type: 'var', name: 'rentals'},
			filename: 'remoteHome.js',
			exposes: {
				RentalsModule: './projects/rentals/src/app/rentals/rentals.module.ts'
			},
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
			}
		})
	]
};
export default webpackConfig;
