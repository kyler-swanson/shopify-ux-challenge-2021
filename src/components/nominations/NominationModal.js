import { Modal, Alert } from 'antd';
import { FireTwoTone, TrophyTwoTone } from '@ant-design/icons';

export const showNominations = (nominations) => {
  const modal = Modal.info({
    icon: <FireTwoTone twoToneColor='#ffae00' />,
    title: 'And the picks are in...',
    content: '',
    okText: 'Woo!',
    zIndex: 5000
  });

  // cascade nominations by showing one every second
  for (let i = 0; i < nominations.length; i++) {
    setTimeout(() => {
      modal.update((prevConfig) => ({
        ...prevConfig,
        content: (
          <>
            {prevConfig.content}
            <br />
            <Alert
              showIcon
              icon={<TrophyTwoTone twoToneColor='#fc5603' />}
              message={nominations[i].Title}
              description={nominations[i].Year}
            />
          </>
        )
      }));
    }, 1000 * i);
  }
};
