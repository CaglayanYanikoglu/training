import './loading.style.css';

const Loading = () => {
  return (
    <div className='loadingWrapper'>
      <div className='spinner-border text-light' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
