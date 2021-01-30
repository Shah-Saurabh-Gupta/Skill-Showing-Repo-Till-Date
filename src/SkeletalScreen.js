import Articles from "./components/Articles";
import User from "./components/User";
import './SkeletalScreen.css';

function SkeletalScreen() {
  return (
    <div className="SkeletalScreen">
      <header>
        <h1>React Skeletal Screens</h1>
      </header>
      <div className="skeletalcontent">
        <Articles />
        <User />
      </div>
    </div>
  );
}

export default SkeletalScreen;