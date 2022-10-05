import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../Json/user.json';
import data from '../Json/data.json';
import friends from '../Json/friends.json';
import transactions from '../Json/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'UPLOADS STATUS'} stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />
    </div>
  );
};
