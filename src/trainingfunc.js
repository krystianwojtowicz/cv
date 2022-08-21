import React from "react";

function App() {
  const [state, setState] = useState({
    flag: false,
    fields: [],
    Namefield: { value: "", error: "" },
    Emailfield: { value: "", error: "" },
    Mobilefield: { value: "", error: "" },
    tablerows: [],
  });

  const addRow = (e) => {
    e.preventDefault();
    var newdata = {
      name: state.Namefield.value,
      mobile: state.Mobilefield.value,
      mail: state.Emailfield.value,
    };
    //take the existing state and concat the new data and set the state again
    setState({ tablerows: state.tablerows.concat(newdata), flag: true });

    const name1 = state.Namefield;
    const mob1 = state.Mobilefield;
    const mail1 = state.Emailfield;

    if (name1.value !== "") {
      const newName = [...state.fields, name1];
      setState({
        fields: newName,
        Namefield: {
          value: "",
          error: "",
        },
      });
    }

    if (mob1.value !== "") {
      const newMob = [...state.fields, mob1];
      setState({
        fields: newMob,
        Mobilefield: {
          value: "",
          error: "",
        },
      });
    }

    if (mail1.value !== "") {
      const newMail = [state.fields, mail1];
      setState({
        fields: newMail,
        Emailfield: {
          value: "",
          error: "",
        },
      });
    }
  };

  const handleName = (e) => {
    setState({
      ...state,
      Namefield: {
        value: e.target.value,
        error: false,
      },
    });
  };

  return <div className="App">....</div>;
}

export default App;
