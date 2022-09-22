export default function LittleSquare({ click, step, value }) {
  return (
    <>
      <div className="square" onClick={(i) => click()}>
        {value}
      </div>
    </>
  );
}
