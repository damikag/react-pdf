import * as R from 'ramda';
import * as P from '@paladin-analytics/rpdf-primitives';

const isLink = R.propEq('type', P.Link);

export default isLink;
