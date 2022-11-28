import "../styles/loader.css";

const Loader = () => {
  return (
    <div className="loader__Wrapper">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
