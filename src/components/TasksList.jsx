import React, { Component } from "react";

class TasksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameScheme: {
        zakup: "Zakup",
        odbior: "Odbiór",
        zaliczka: "Zaliczka",
        wplywy: "Wpływy",
        wydatki: "Wydatki",
        stalowyShort: "St",
        kolorowyShort: "Kl",
        default: "-"
      },
      ifShowMore: false
    };

    this.handleShowMore = this.handleShowMore.bind(this);
  }

  handleShowMore() {
    this.setState(prevState => {
      const newValue = (prevState.ifShowMore = !prevState.ifShowMore);
      return {
        ifShowMore: newValue
      };
    });
  }

  render() {
    // Wybranie tylko tasks z odpowiednim originId
    const newFilteredTasks = this.props.tasks.filter(f => {
      //return f.originId === Number(this.props.workplaceId);
      return this.props.workplaceId !== undefined
        ? f.originId === Number(this.props.workplaceId)
        : f.originId;
    });
    // Odczytanie 5 zadan z tablicy
    const newTasks = newFilteredTasks.slice(0, 5).map((item, index = 0) => {
      // Zliczanie ilosci wypisanych wierszy
      index++;
      // Ukrywanie/pokazywanie elementow zaleznie od liosci (index) i staun przycisku (ifShowMore)
      const hidenStyle = {};
      if (index > 3 && !this.state.ifShowMore) {
        hidenStyle.display = "none";
      }
      return (
        <div
          key={item.id}
          style={hidenStyle}
          className={item.deletedAt != null ? "task-list gray" : "task-list"}
        >
          <div>
            <span>{`${item.expense} zł`}</span>
            <h4>
              {this.props.workplaceId === undefined
                ? `Sklep ${item.originId}, `
                : null}
              {item.deletedAt != null ? "Anulowano" : item.actionDate}
            </h4>
          </div>
          <div className="task-description">
            <div className="border-right align-right">
              <span>{item.quantity === "" ? "-" : item.quantity + " kg"}</span>
              <span className="gray">
                {this.state.nameScheme[item.task] === undefined
                  ? this.state.nameScheme.default
                  : this.state.nameScheme[item.task]}
              </span>
            </div>
            <h4 className={item.deletedAt != null ? null : "orange"}>
              {this.state.nameScheme[item.metalType + "Short"] === undefined
                ? this.state.nameScheme.default
                : this.state.nameScheme[item.metalType + "Short"]}
            </h4>
          </div>
        </div>
      );
    });
    return (
      <div className="border component">
        <div className="border-title">
          <h2>Ostatnie zlecenia</h2>
          <h4>
            {this.props.workplaceName !== undefined &&
            this.props.workplaceId !== undefined
              ? `${this.props.workplaceName} ${this.props.workplaceId}`
              : null}
          </h4>
        </div>
        {newTasks.length === 0 ? "Brak dokonanych zleceń" : newTasks}
        {newTasks.length !== 0 ? (
          <h4 className="more orange">
            <button onClick={this.handleShowMore}>
              {this.state.ifShowMore ? "MNIEJ" : "WIĘCEJ"}
            </button>
          </h4>
        ) : null}
      </div>
    );
  }
}

export default TasksList;
