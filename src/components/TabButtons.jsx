import { useRef, useEffect } from 'react';

function TabButtons({tabName, setTabName}) {
  const buttonRef = useRef([]);

  useEffect(() => {
    buttonRef.current[0].classList.add('selected');
  }, []);

  const removeClassName = () => {
    buttonRef.current.forEach((item) => item.classList.remove('selected'));
  };

  const onClickEmail = () => {
    removeClassName();
    buttonRef.current[0].classList.add('selected');
    setTabName('email');
  };

  const onClickPhone = () => {
    removeClassName();
    buttonRef.current[1].classList.add('selected');
    setTabName('phone');
  };

  return (
    <div className='tab-buttons'>
      <button onClick={onClickEmail} ref={(el) => buttonRef.current[0] = el}>
        본인 확인 이메일로 인증
      </button>
      <button onClick={onClickPhone} ref={(el) => buttonRef.current[1] = el}>
        등록된 휴대전화로 인증
      </button>
    </div>
  );
}

export default TabButtons;
