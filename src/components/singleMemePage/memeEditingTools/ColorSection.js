import Color from "./Color";

const ColorSection = ({ state, dispatch, index }) => {
  return (
    <div className="flex items-start justify-center gap-5 ml-5">
      <div className="flex items-start gap-5 justify-evenly">
        {/* Font Color */}
        <Color state={state} dispatch={dispatch} index={index} type="color" />
        {/* Border Color */}
        <Color state={state} dispatch={dispatch} index={index} type="border" />
      </div>
    </div>
  );
};

export default ColorSection;
