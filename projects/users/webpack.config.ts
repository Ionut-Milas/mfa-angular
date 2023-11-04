import {Configuration, container} from 'webpack';
import { dependencies } from '../../package.json';
export const webpackConfig: Configuration = {
	output: {
		publicPath: './users/',
		uniqueName: 'users',
	},
	experiments: {
		topLevelAwait: true,
	},
	optimization: {
		runtimeChunk: false,
	},
	plugins: [
		new container.ModuleFederationPlugin({
			name: 'users',
			library: {type: 'var', name: 'users'},
			filename: 'remoteHome.js',
			exposes: {
				UsersModule: './projects/users/src/app/users/users.module.ts'
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
