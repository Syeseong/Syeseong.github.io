
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
    // 스크롤 흔들림 방지 로직
    const preventOverscroll = (e) => {
      e.preventDefault();
    };

    document.body.addEventListener('touchmove', preventOverscroll, { passive: false });

    // Cleanup 함수
    return () => {
      document.body.removeEventListener('touchmove', preventOverscroll, { passive: false });
    };
  }, [])
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
