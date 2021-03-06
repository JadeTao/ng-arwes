import { addDecorator, moduleMetadata } from '@storybook/angular';
import { NgArwesModule } from 'ng-arwes';
import note from './frame.note.md';

export default {
  title: 'Frame',
  parameters: {
    notes: { note },
  },
};

addDecorator(moduleMetadata({
  imports: [NgArwesModule],
  schemas: [],
  declarations: [],
  providers: [],
}));

export const Text = () => ({
  template: `
<div>
  <na-frame
    show animate
    [level]="3"
    [corners]="4"
    layer="primary"
    style="display: inline-block;"
  >
    <div style="height: 100px; width: 200px; line-height: 100px; text-align: center;">
      Cyberpunk
    </div>
  </na-frame>
</div>
<div>
  <na-frame
    show animate
    [level]="3"
    [corners]="4"
    layer="secondary"
    style="display: inline-block;"
  >
    <div style="height: 100px; width: 200px; line-height: 100px; text-align: center;">
      Cyberpunk
    </div>
  </na-frame>
</div>
  `,
});
