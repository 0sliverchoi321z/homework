// 로그인 상태 체크박스
const checkbox = document.querySelector('.login_keep input');
const iconImg = document.querySelector('#checkIcon img');

checkbox.addEventListener('change', () => {
  iconImg.src = checkbox.checked ? './svg/checked.svg' : './svg/unchecked.svg';
});

// ip 보안 버튼
const ipBtn = document.querySelector('.btn_ip');
const stateText = ipBtn.querySelector('.state');

ipBtn.addEventListener('click', () => {
  // 새창 열기
  window.open('/src/login/pages/ip_security.html', '_blank', 'noopener');

  // ON/OFF 토글
  const isOn = ipBtn.getAttribute('aria-pressed') === 'true';
  ipBtn.setAttribute('aria-pressed', String(!isOn));
  stateText.textContent = isOn ? 'OFF' : 'ON';
});
