import { useState } from "react";
import "./App.css";

function App() {
  const gugudan = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [inputnum, setInputnum] = useState();
  const [inputNumGugudan, setInputNumGugudan] = useState(false);
  const [result, setResult] = useState([]);

  const ChangeInputnum = () => {
    setInputNumGugudan(true);
    const n = Number(inputnum);
    if (isNaN(n) || n <= 0) return alert("유효하지 않은 숫자입니다.");

    const newArr = [];
    for (let i = 1; i <= (inputnum < 10 ? 9 : inputnum); i++) {
      newArr.push(`${inputnum} x ${i} = ${i * inputnum}`);
    }
    console.log(newArr);
    setResult(newArr);
  };

  return (
    <>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "30px",
        }}
      >
        <article style={{ textAlign:'center', justifyItems:'center' }}>
          <h1>구구단</h1>
          <div style={{ display: "flex", gap: 20 }}>
            {gugudan.map(
              (num) =>
                num !== 1 &&
                num !== 5 && (
                  <div key={num}>
                    {gugudan.map((n) => (
                      <div
                        key={n}
                        style={{ color: num % 2 === 0 ? "gray" : "" }}
                      >
                        {num} x {n} = {num * n}
                      </div>
                    ))}
                  </div>
                )
            )}
          </div>
        </article>
        <article>
          <h1>원하는 구단을 입력해주세요.</h1>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <input
              type="text"
              value={inputnum}
              onChange={(e) => setInputnum(e.target.value)}
              placeholder="숫자를 입력해 주세요."
              style={{ width: "20vw", height: "4vh", fontSize: 20 }}
            />
            <button onClick={() => ChangeInputnum()}>입력</button>
          </div>
          <div>
            {inputNumGugudan && (
              <div>
                <h2>{inputnum}단을 시작할게요😘</h2>
                <p>
                  {result.map((e) => (
                    <div key={e}>{e}</div>
                  ))}
                </p>
              </div>
            )}
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
