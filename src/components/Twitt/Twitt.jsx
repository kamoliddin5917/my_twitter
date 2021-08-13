import "./Twitt.scss";
import twitts from "../../twitts/Twitts";
import likeLogo from "../../img/like.svg";

const Twitt = ({ userName, last }) => {
  return (
    <>
      {twitts.length > 0 && (
        <ul className="twitts">
          {twitts
            .filter((twit) => {
              if (last) {
                return twit;
              }
              return twit.name === userName;
            })
            .map((item) => (
              <li className="twitt" key={item.id}>
                <img
                  className="twitt__img"
                  src={item.img}
                  alt={`${item.name}`}
                />
                <div className="twitt__text">
                  <h4 className="twitt__name">{item.name}</h4>
                  <p className="twitt__comment">{item.comment}</p>
                  <img className="twitt__like" src={likeLogo} alt="like-logo" />
                </div>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default Twitt;
