import { useNavigate } from 'react-router-dom';
import '../../styles/components/ReturnButton.css';

const ReturnButton = () => {
  const navigate = useNavigate();

  return (
    <div className='return'>
      <div className='return' onClick={() => navigate(-1)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-arrow-narrow-left primary'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='#E72E38'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <line x1='5' y1='12' x2='19' y2='12'></line>
          <line x1='5' y1='12' x2='9' y2='16'></line>
          <line x1='5' y1='12' x2='9' y2='8'></line>
        </svg>
        <div className='text-primary'>Return</div>
      </div>
    </div>
  );
};

export default ReturnButton;
