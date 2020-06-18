import * as sapper from '@sapper/app';
import { querySelector } from './utils/dom/querySelector';

try {
  sapper.start({
    target: querySelector('#sapper'),
  });
} catch (err) {
  console.error('Failed to load app', err);
}
