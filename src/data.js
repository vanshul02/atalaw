// import about icons
import Skill1 from '../src/assets/img/skills/skill1.png';
import Skill2 from '../src/assets/img/skills/skill2.png';
import Skill3 from '../src/assets/img/skills/skill3.png';
import Skill4 from '../src/assets/img/skills/skill4.png';
import Skill5 from '../src/assets/img/skills/skill5.png';
import Skill6 from '../src/assets/img/skills/skill6.png';


// import social icons
import FacebookIcon from '../src/assets/img/social/facebook.png';
import TwitterIcon from '../src/assets/img/social/twitter.png';
import InstagramIcon from '../src/assets/img/social/instagram.png';
import YoutubeIcon from '../src/assets/img/social/youtube.png';
import MailIcon from '../src/assets/img/social/mail.png';
import CallIcon from '../src/assets/img/social/call.png';
import OfficeIcon from '../src/assets/img/social/office.png';


export const icons = {
  mail: MailIcon,
  call: CallIcon,
  office: OfficeIcon,
}
// navigation data
export const navigation = [
  {
    name: 'Home',
    href: 'home',
  },
  {
    name: 'Practice Areas',
    href: 'skills',
  },
  {
    name: 'Contact us',
    href: 'contact',
  },
];


// skills data
export const skills = [
  {
    icon: Skill1,
    title: 'Company Law',
    description:
      'Advising on incorporation, governance, compliance, and regulatory matters under company law.',
  },
  {
    icon: Skill2,
    title: 'Direct Tax',
    description:
      'Advising on income tax planning, assessments, appeals, and compliance with applicable tax laws.',
  },
  {
    icon: Skill3,
    title: 'Intellectual Property Rights',
    description:
      'Advising on registration, enforcement, and protection of trademarks, copyrights, and designs before relevant authorities.',
  },
  {
    icon: Skill4,
    title: 'Insolvency Law',
    description:
      'Advising on restructuring, liquidation, bankruptcy, and creditor rights under insolvency regulations.',
  },
  {
    icon: Skill5,
    title: 'Property Law',
    description:
      'Advising on compliance, registration, dispute resolution, and regulatory matters under the RERA, 2016.',
  },
  {
    icon: Skill6,
    title: 'Consumer Protection',
    description:
      'Advising on consumer rights, filing complaints, dispute resolution, and representation before Consumer Courts and Forums.',
  },
];


// social data
export const social = [
  {
    icon: FacebookIcon,
  },
  {
    icon: TwitterIcon,
  },
  {
    icon: InstagramIcon,
  },
  {
    icon: YoutubeIcon,
  }
];
