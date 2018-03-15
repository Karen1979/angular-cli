import { ng } from '../../utils/process';
import { updateJsonFile } from '../../utils/project';

export default function () {
  // TODO(architect): Delete this test. It is now in devkit/build-webpack.

  return updateJsonFile('tsconfig.json', configJson => {
    const compilerOptions = configJson['compilerOptions'];
    compilerOptions['target'] = 'es2015';
  })
    .then(() => updateJsonFile('src/tsconfig.spec.json', configJson => {
      const compilerOptions = configJson['compilerOptions'];
      compilerOptions['target'] = 'es2015';
    }))
    .then(() => ng('test', '--watch=false'));
}
