/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createClassWrapper } from '../../internal/createClassWrapper';
import ContentSwitcherCarbon from './ContentSwitcher';

const ContentSwitcher = createClassWrapper(ContentSwitcherCarbon);
export default ContentSwitcher;
export { ContentSwitcher };
