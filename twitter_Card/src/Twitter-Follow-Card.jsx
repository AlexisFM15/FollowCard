/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

export function TwitterFollowCard({ userName, children }) {
  const [isFollowing, setIsfollowing] = useState(false);

  const text = isFollowing ? "Siguiendo" : "seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsfollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="avatar de oso"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUsername">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
