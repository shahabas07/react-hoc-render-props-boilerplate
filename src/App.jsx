import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikeimageHOC from './components/LikeImageHOC'
import LikePostHOC from './components/LikePostHOC'
import LikeImageProps from './components/LikeImageProps';
import LikePostProps from './components/LikePostProps'

function App() {
  return (
    <div className='div'>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div>
      <h3>Blog HOC</h3>
      <div className='buttons'>
        <LikePostHOC/>
        <LikeimageHOC/>
      </div>
      <h3>Blog Props</h3 >
      <div className='buttons'>
        <LikeImageProps/>
        <LikePostProps/>
      </div>
    </div>
  );
}

export default App;
