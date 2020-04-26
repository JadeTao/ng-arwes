import { addDecorator, moduleMetadata } from '@storybook/angular';
import { NgArwesModule } from 'ng-arwes';
import note from './blockquote.note.md';

export default {
  title: 'Blockquote',
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
<blockquote arwes-blockquote layer="success"> Put your content here </blockquote>
<blockquote arwes-blockquote layer="primary"> Put your content here </blockquote>
<blockquote arwes-blockquote layer="disabled"> Put your content here </blockquote>
<blockquote arwes-blockquote layer="alert"> Put your content here </blockquote>
`,
});
