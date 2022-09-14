import "../../styles/styles.scss";
import { HeaderTableToDo } from "../headerTableToDo/HeaderTableToDo";
import { HeaderTableStat } from "../headerTableStat/HeaderTableStat";
import { Button } from "../button/Button";
import { ListStat } from "../listStat/ListStat";
import { ListToDo } from "../listToDo/ListToDo";

export const Layout = () => {
  return (
    <div className="mainContainer">
      <div className="table">
        <HeaderTableToDo />
        <ListToDo />
      </div>
      <Button />
      <div className="table">
        <HeaderTableStat />
        <ListStat />
      </div>
    </div>
  );
};
