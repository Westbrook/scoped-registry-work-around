import { html, TemplateResult } from '@spectrum-web-components/base';

import '@spectrum-web-components/card/sp-card.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-file-txt.js';
import '@spectrum-web-components/textfield/sp-textfield.js';
import '@spectrum-web-components/action-menu/sp-action-menu.js';
import '@spectrum-web-components/menu/sp-menu.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import '@spectrum-web-components/menu/sp-menu-divider.js';


export interface StoryArgs {
    horizontal?: boolean;
    size?: 's';
}

export const smallHorizontal = (args: StoryArgs): TemplateResult => {
    return html`
        <sp-card
            .size=${args.size}
            ?horizontal=${args.horizontal}
            heading="Card Heading"
            subheading="JPG"
        >
            <sp-icon-file-txt
                slot="preview"
                style="width: 36px; height: 36px;"
            ></sp-icon-file-txt>
        </sp-card>
    `;
};
smallHorizontal.args = {
    horizontal: true,
    size: 's',
};