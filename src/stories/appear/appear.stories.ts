import { AppearComponent } from 'ng-arwes/components/appear/appear.component';
import { NgArwesModule } from 'ng-arwes';
import note from './appear.note.md';
import { addDecorator, moduleMetadata } from '@storybook/angular';

export default {
  title: 'Appear',
  component: AppearComponent,
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
const artical = `
To be, or not to be- that is the question:
Whether 'tis nobler in the mind to sufferThe
slings and arrows of outrageous fortune
Or to take arms against a sea of troubles,
And by opposing end them. To die- to sleep-
No more; and by a sleep to say we end
The heartache, and the thousand natural shocks
That flesh is heir to. 'Tis a consummation
Devoutly to be wish'd. To die- to sleep.
To sleep- perchance to dream: ay, there's the rub!
For in that sleep of death what dreams may come
When we have shuffled off this mortal coil,
Must give us pause. There's the respect
That makes calamity of so long life.
For who would bear the whips and scorns of time,
Th' oppressor's wrong, the proud man's contumely,
The pangs of despis'd love, the law's delay,
The insolence of office, and the spurns
That patient merit of th' unworthy takes,
When he himself might his quietus make
With a bare bodkin? Who would these fardels bear,
To grunt and sweat under a weary life,
But that the dread of something after death-
The undiscover'd country, from whose bourn
No traveller returns- puzzles the will,
And makes us rather bear those ills we have
Than fly to others that we know not of?
Thus conscience does make cowards of us all,
And thus the native hue of resolution
Is sicklied o'er with the pale cast of thought,
And enterprises of great pith and moment
With this regard their currents turn awry
And lose the name of action.
`;
export const Text = () => ({
  template: `
<div arwes-appear animate>with appear animation ${artical}</div>
<br>
<div arwes-appear>without appear animation ${artical}</div>
`
});