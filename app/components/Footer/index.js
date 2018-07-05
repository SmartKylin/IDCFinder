import React from 'react';
// import { FormattedMessage } from 'react-intl';

import A from 'components/A';
// import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
// import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>This project is licensed under the MIT license.</section>
      <section>语言选择开关</section>
      <section>
        Made with love by
        <A href="https://twitter.com/mxstbr">Max Stoiber</A>,
      </section>
    </Wrapper>
  );
}

export default Footer;
