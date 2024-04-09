
import './App.css';
import './Detail.css';
import './Button.css'
import './Add.css'
import './Modal.css'
import DetailSchedule from './pages/DetailSchedule';
import Main from './pages/Main';
import { useSchedules } from './context/ScheduleContext';
import { useEffect } from 'react';


function App() {
  const { modalOn, modalOn2 } = useSchedules()
  useEffect(() => {
    const preventOverscroll = (e) => {
      // 스크롤이 필요한 요소 내에서의 이벤트인지 체크
      if (e.target.classList.contains('scrollable')) {
        // 스크롤이 필요한 요소 내에서는 기본 동작 방지를 하지 않음
        return;
      }
      e.preventDefault();
    };

    document.body.addEventListener('touchmove', preventOverscroll, { passive: false });

    return () => {
      document.body.removeEventListener('touchmove', preventOverscroll, { passive: false });
    };
  }, []);

  return (
    <div className="App">
      <div className='main_container'>
        <Main />
      </div>
      <div className='detail_container'>
        <DetailSchedule />
      </div>
      <div className={`modal-overlay ${modalOn || modalOn2 ? 'display-block' : 'display-none'}`}></div>
    </div>
  );
}

export default App;
