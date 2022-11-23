import { useState } from 'react';
import Input from './components/Input';
import TabButtons from './components/TabButtons';
import useInput from './hooks/useInput';

import './styles/id_find.css';

function App() {
  const [tabName, setTabName] = useState('email');

  const { value: name, onChange: onChangeName } = useInput('');
  const { value: email, onChange: onChangeEmail } = useInput('');
  const { value: phoneNumber, onChange: onChangePhoneNumber } = useInput('');

  const userInfo = [
    { name: '김태현', email: 'th@naver.com', phone: '01011111111', userId: 'NIHILncunia' },
    { name: '안도진', email: 'dj@naver.com', phone: '01022222222', userId: 'dukjin' },
    { name: '이수진', email: 'sj@naver.com', phone: '01033333333', userId: 'sujini' },
    { name: '임윤지', email: 'yj@naver.com', phone: '01044444444', userId: 'yoonja' },
  ];

  const confirmInfo = (info, user) => {
    if (tabName === 'email' ? user.email === info : user.phone === info) {
      alert(`${info}와 일치하는 아이디는 ${user.userId}입니다.`);
    } else {
      alert('일치하는 회원정보가 없습니다. 다시 확인해주세요.');
    }
  }

  const onSubmitForm = (e) => {
    e.preventDefault();

    const filteredUser = userInfo.filter((item) => item.name === name.value);

    if (filteredUser.length === 0) {
      alert('입력하신 이름과 일치하는 회원정보가 없습니다. 다시 확인해주세요.');
      return;
    }

    const [user] = filteredUser;

    if (tabName === 'email') {
      confirmInfo(email.value, user);
    } else {
      confirmInfo(phoneNumber.value, user);
    }
  };

  return (
    <>
      <h2>아이디 찾기</h2>
      <p>아이디 찾는 방법을 선택해 주세요</p>

      <TabButtons tabName={tabName} setTabName={setTabName} />

      <form onSubmit={onSubmitForm}>
        <div className='input-block'>
          <label htmlFor="user-name">이름</label>
          <Input
            type='text'
            name='name'
            id='user-name'
            value={name}
            onChange={onChangeName}
          />
        </div>
        <div className='input-block'>
          {tabName === 'email' && (
            <>
              <label htmlFor="user-email">이메일</label>
              <Input
                type='email'
                name='email'
                id='user-email'
                value={email}
                onChange={onChangeEmail}
              />
            </>
          )}
          {tabName === 'phone' && (
            <>
              <label htmlFor="user-phone-number">휴대폰 번호</label>
              <Input
                type='text'
                name='phone-number'
                id='user-phone-number'
                holder='- 빼고 입력'
                value={phoneNumber}
                onChange={onChangePhoneNumber}
              />
            </>
          )}
        </div>
        <button className='submit-button' type='submit'>아이디 찾기</button>
      </form>
    </>
  );
};

export default App;
