import '@spectrum-web-components/card/sp-card.js';
import { Card } from '@spectrum-web-components/card';
import '@spectrum-web-components/action-menu/sp-action-menu.js';
import '@spectrum-web-components/menu/sp-menu.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import '@spectrum-web-components/menu/sp-menu-divider.js';
import { fixture, elementUpdated, html, expect } from '@open-wc/testing';

import {
    smallHorizontal,
    StoryArgs,
} from '../stories/index.js';

describe('AnotherTest', () => {
  it.only('loads - [horizontal]', async () => {
    const el = await fixture<Card>(
        smallHorizontal(smallHorizontal.args as StoryArgs)
    );

    await elementUpdated(el);

    await expect(el).to.be.accessible();
});
});
