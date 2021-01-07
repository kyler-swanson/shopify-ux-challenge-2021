import { Modal, Result } from 'antd';
import { TrophyOutlined } from '@ant-design/icons';

export const showWelcomeModal = () => {
  Modal.info({
    icon: null,
    content: (
      <Result
        icon={<TrophyOutlined />}
        title={
          <>
            <h4>Welcome to The Shoppies!</h4>
            <p>We need your help deciding who to give the Shoppies Award!</p>
            <span style={{ fontSize: '18px' }}>
              To help us, please nominate five movies of your choosing. You can
              search for whichever movie you deem worthy. To help you, we've
              listed several popular films.
            </span>
            <br />
            <br />
            <p>Good luck! 🔥📽️</p>
          </>
        }
      />
    ),
    width: 680,
    zIndex: 5000
  });
};
