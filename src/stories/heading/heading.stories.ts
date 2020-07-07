import note from './heading.note.md';

export default {
  title: 'Heading',
  parameters: {
    notes: { note },
  },
};

export const Text = () => ({
  template: `
<h1 arwes-heading> Angular Arwes Heading . H1 </h1>
<h2 arwes-heading> Angular Arwes Heading . H2 </h2>
<h3 arwes-heading> Angular Arwes Heading . H3 </h3>
<h4 arwes-heading> Angular Arwes Heading . H4 </h4>
<h4 arwes-heading> Angular Arwes Heading . H5 </h4>
<h6 arwes-heading> Angular Arwes Heading . H6 </h6>
<h1 arwes-heading> Angular Arwes 中文标题 . H1 </h1>
<h2 arwes-heading> Angular Arwes 中文标题 . H2 </h2>
<h3 arwes-heading> Angular Arwes 中文标题 . H3 </h3>
<h4 arwes-heading> Angular Arwes 中文标题 . H4 </h4>
<h4 arwes-heading> Angular Arwes 中文标题 . H5 </h4>
<h6 arwes-heading> Angular Arwes 中文标题 . H6 </h6>
`,
});