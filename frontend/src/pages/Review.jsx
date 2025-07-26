import React from 'react';
import "../App.css";
import { useInView } from 'react-intersection-observer';

export default function Review() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      className='review'
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 0.8s ease-in-out',
      }}
    >
      <div>
        <h1 style={{ color: "#5DADEC" }}>What Our Users Say</h1>
      </div>
      <br />
      <div className='cardfeaturecontainer1'>
        <div className='cardfeature1'>
          <img src="./pic1.jpg" alt="user1" />
          <br /><br />
          <h3>Khushwant Sharma</h3>
          <p>Connectly has made our virtual meetings smoother than ever! The interface is clean, and the connection is seamless — truly a game-changer for remote teams.</p>
        </div>
        <div className='cardfeature1'>
          <img src="./pic2.jpg" alt="user2" />
          <br /><br />
          <h3>Vansh Chauhan</h3>
          <p>From HD video calls to instant screen sharing, Connectly nails all the essentials with zero lag. It's my go-to tool for client meetings!</p>
        </div>
        <div className='cardfeature1'>
          <img src="./pic3.jpg" alt="user3" />
          <br /><br />
          <h3>Simmi Sharma</h3>
          <p>Loved the quick join feature and real-time collaboration tools. Connectly feels like Zoom, but faster and more focused on user experience!</p>
        </div>
      </div>
    </div>
  );
}
