import {Configuration, container} from 'webpack';
import { dependencies } from '../../package.json';

export const webpackConfig: Configuration = {
	output: {
		publicPath: './common/',
		uniqueName: 'common',
	},
	experiments: {
		topLevelAwait: true,
	},
	optimization: {
		runtimeChunk: false,
	},
	plugins: [
		new container.ModuleFederationPlugin({
			name: 'common',
			library: {type: 'var', name: 'common'},
			filename: 'remoteHome.js',
			exposes: {
				CommonModule: './projects/common/src/app/app.module.ts'
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
