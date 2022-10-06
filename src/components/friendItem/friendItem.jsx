
import css from "./FriendList.module.css"

export function FriendItem(item) {
return (  <li className={css.item} key={item.id}>
          <span
            className={item.isOnline ? `${css.status} ${css.isOnline}` : `${css.status} ${css.isOffline}`}
          ></span>
          <img
            className={css.avatar}
            src={item.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{item.name}</p>
        </li>)
}

